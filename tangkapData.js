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
    }
    if(document.querySelector('.reactJs').checked) {
        obj.react = document.querySelector('.reactJs').value;
        if(obj.react == 'reactJs') {
            obj.reactJs = 'img/react.png'
        }
    }
    if(document.querySelector('.vueJs').checked) {
        obj.vue = document.querySelector('.vueJs').value;
        if(obj.vue == 'vueJs') {
            obj.vueJs = 'img/vue.png'
        }
    }
    if(document.querySelector('.typeScript').checked) {
        obj.typeScript = document.querySelector('.typeScript').value;
        if(obj.typeScript == 'typeScript') {
            obj.typeScriptJs = 'img/typescript.png'
        }
    }


    dataForm.push(obj);
    console.log(dataForm);

    console.log(dataForm[0].uploadImg)

    for(let i = 0; i < dataForm.length; i++) {
        if(i == dataForm.length-1) {
            document.querySelector('.container').innerHTML += `
        
                <div class="card">
                    <div class="maxSizeImg">
                        <img src="${dataForm[i].uploadImg}" alt="" class="imgContent">
                    </div>
                    <div class="judulCard">
                        <h3>${dataForm[i].projectName}</h3>
                        <div class="durasi">
                            <p>Durasi:</p> <p>${dataForm[i].startDate} - ${dataForm[i].endDate}</p>
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