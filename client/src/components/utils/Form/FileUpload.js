// import React, { Component } from 'react';
// import Dropzone from 'react-dropzone';
// import axios from 'axios';

// import fontAwesomeIcon from '@fortawesome/react-fontawesome';
// import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle';
// import CircularProgress from '@material-ui/core/CircularProgress';

// class FileUpload extends Component {
//     constructor(){
//         super();
//         this.super = {
//             uploadedFiles: [],
//             uploading: false
//         }
//     }

//     onDrop = (e) => {
//         console.log(e);
//     }

//     render() {
//         return (
//             <div>
//                 <section>
//                     <div className='dropzone clear'>
//                     <Dropzone 
//                         onDrop={(e) => this.onDrop(e)} 
//                         multiple 
//                         maxSize={8000000}
//                     >
// 	                    {({ getRootProps, getInputProps }) => (
//                               <div
//                               {...getRootProps()}
//                             >
//                               <input {...getInputProps()} />
//                             </div>
// 	                    )}
//                     </Dropzone>
//                     </div>
//                 </section>
//             </div>
//         )
//     }
// }
// export default FileUpload;