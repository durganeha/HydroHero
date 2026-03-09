/* Global */

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
background:#f4f6f8;
color:#1f2937;
padding-bottom:90px;
}

/* TOP BAR */

.topbar{
display:flex;
justify-content:space-between;
align-items:center;
padding:18px 20px;
background:white;
border-bottom:1px solid #e5e7eb;
}

.title{
font-size:22px;
font-weight:600;
color:#1f6fd6;
}

.icons button{
background:none;
border:none;
font-size:20px;
margin-left:10px;
cursor:pointer;
}

/* MAIN CONTAINER */

.video-container{
padding:20px;
max-width:900px;
margin:auto;
}

/* CAMERA VIDEO */

#video{
width:100%;
border-radius:20px;
border:3px solid #2b7de9;
object-fit:cover;
}

/* BUTTONS */

.photo-buttons{
display:flex;
justify-content:space-between;
margin-top:20px;
gap:20px;
}

.photo-buttons button{
flex:1;
padding:14px;
font-size:18px;
border:none;
border-radius:40px;
background:#1f78d1;
color:white;
cursor:pointer;
font-weight:500;
transition:0.2s;
}

.photo-buttons button:hover{
background:#1667b8;
}

/* PREVIEW AREA */

.preview-section{
display:flex;
gap:20px;
margin-top:25px;
}

.preview-box{
flex:1;
background:#f1f3f5;
border-radius:18px;
padding:15px;
text-align:center;
border:2px dashed #d1d5db;
}

.preview-box p{
font-weight:500;
margin-bottom:8px;
color:#4b5563;
}

.preview-box img{
width:100%;
border-radius:14px;
margin-top:5px;
display:none;
}

.preview-box span{
display:block;
margin-top:30px;
color:#6b7280;
}

/* COMPLETE BUTTON */

.complete-btn{
width:100%;
margin-top:25px;
padding:16px;
border:none;
border-radius:40px;
font-size:18px;
font-weight:600;
background:#c7d7f1;
color:white;
cursor:not-allowed;
}

.complete-btn.active{
background:#1f78d1;
cursor:pointer;
}

/* BOTTOM NAV */

.bottomnav{
position:fixed;
bottom:0;
left:0;
width:100%;
background:white;
border-top:1px solid #e5e7eb;
display:flex;
justify-content:space-around;
padding:10px 0;
}

.bottomnav a{
text-decoration:none;
color:#6b7280;
font-size:13px;
text-align:center;
}

.bottomnav a.active{
color:#1f78d1;
font-weight:500;
}

/* DARK MODE */

body.dark{
background:#0f172a;
color:white;
}

body.dark .topbar{
background:#1e293b;
border-bottom:none;
}

body.dark .preview-box{
background:#1e293b;
border-color:#334155;
}

body.dark .bottomnav{
background:#1e293b;
border-top:none;
}
