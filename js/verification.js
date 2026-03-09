/* -------- AI MODEL URL -------- */

const MODEL_URL = "https://teachablemachine.withgoogle.com/models/i4MFkJTPM/";

let model;
let maxPredictions;


/* -------- LOAD MODEL -------- */

async function loadModel() {

    const modelURL = MODEL_URL + "model.json";
    const metadataURL = MODEL_URL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    console.log("AI Model Loaded");

}


/* -------- VERIFY IMAGE -------- */

async function verifyImage(imageElement) {

    if (!model) {
        await loadModel();
    }

    const prediction = await model.predict(imageElement);

    let bestPrediction = prediction[0];

    for (let i = 1; i < prediction.length; i++) {

        if (prediction[i].probability > bestPrediction.probability) {
            bestPrediction = prediction[i];
        }

    }

    console.log("Prediction:", bestPrediction.className, bestPrediction.probability);

    return bestPrediction;

}


/* -------- VERIFY CHALLENGE -------- */

async function verifyChallenge(afterImageElement) {

    const result = await verifyImage(afterImageElement);

    // adjust class name based on your model
    if (result.className === "Tap Closed" && result.probability > 0.7) {

        return {
            success: true,
            message: "✅ AI Verified: Tap Closed"
        };

    } else {

        return {
            success: false,
            message: "❌ Tap still running. Try again."
        };

    }

}


/* -------- EXPORT FUNCTIONS -------- */

window.verifyChallenge = verifyChallenge;