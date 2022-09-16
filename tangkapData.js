let dataForm = [];

function tangkapData() {
    let obj = {
        projectName : document.querySelector('.projectName').value,
        startDate : document.querySelector('.startDate').value,
        endDate: document.querySelector('.endDate').value,
        description : document.querySelector('.description').value,
        Img : document.querySelector('.uploadImg').files,
    }

    obj.uploadImg = URL.createObjectURL(obj.Img[0]);

    if(document.querySelector('.nodeJs').checked) {
        obj.node = document.querySelector('.nodeJs').value;
        if(obj.node == 'nodeJs') {
            obj.nodeJs = 'img/node.png'
        }
    }  else {
        obj.nodeJs = ""
    }
    if(document.querySelector('.reactJs').checked) {
        obj.react = document.querySelector('.reactJs').value;
        if(obj.react == 'reactJs') {
            obj.reactJs = 'img/react.png'
        }
    } else {
        obj.reactJs = ""
    }
    if(document.querySelector('.vueJs').checked) {
        obj.vue = document.querySelector('.vueJs').value;
        if(obj.vue == 'vueJs') {
            obj.vueJs = 'img/vue.png'
        }
    } else {
        obj.vueJs = ""
    }
    if(document.querySelector('.typeScript').checked) {
        obj.typeScript = document.querySelector('.typeScript').value;
        if(obj.typeScript == 'typeScript') {
            obj.typeScript = 'img/typescript.png'
        }
    } else {
        obj.typeScript = ""
    }


    dataForm.push(obj);
    console.log(dataForm);

    for(let i = 0; i < dataForm.length; i++) {
        if(i == dataForm.length-1) {
            document.querySelector('.container').innerHTML += `
        
                <div class="card">
                    <div class="maxSizeImg">
                        <img src="${dataForm[i].uploadImg}" alt="" class="imgContent">
                    </div>
                    <div class="judulCard">
                        <div class="kotakJudul">
                            <h3>${dataForm[i].projectName}</h3>
                        </div>
                        <div class="durasi">
                            <div>
                                <p>Start</p>
                                <p>End</p>
                            </div>
                            <div>
                                <p>: ${dataForm[i].startDate}</p>
                                <p>: ${dataForm[i].endDate}</p>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div class="isiCard">
                        <p>${dataForm[i].description}</p>
                    </div>
                    <div class="techCheck">
                        <img src="${dataForm[i].nodeJs}">
                        <img src="${dataForm[i].reactJs}">
                        <img src="${dataForm[i].vueJs}">
                        <img src="${dataForm[i].typeScript}">
                    </div>
                    <div class="editDelete">
                        <div class="edit">Edit</div>
                        <div class="delete">Delete</div>
                    </div>
                </div>
            
            `
        }

    }
}