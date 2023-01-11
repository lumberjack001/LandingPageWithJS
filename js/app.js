let card = document.querySelector('.cards')
let courses = document.querySelector('.courses')
let list = document.querySelector('.customer-list')

const learningCat = [
    {
        id: 1
    },
    {
    title: 'Programming',
    Text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sapient tempore',
    background: '#EDF5FF',
    imgSrc: 'assets/images/Website Creator-cuate.png'
},
{
    title: 'graphic design',
    Text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sapient tempore',
    background: '#F5EDFF',
    imgSrc: 'assets/images/Design inspiration-amico.png'
},
];

const courseList = [
    {
        id: 2
    },
    {
        title: 'Graphic Design',
        Text: 'Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans.',
        background: '#EEF9FF',
        imgSrc: 'assets/images/Artist-pana.png'
    },
    {
        title: 'Back-end Programming',
        Text: 'Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans.',
        background: '#F0EEFF',
        imgSrc: 'assets/images/Developer activity-bro.png'
    },
    {
        title: 'UI UX Design',
        Text: 'Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans.',
        background: '#FFF9EE',
        imgSrc: 'assets/images/Mobile UX-cuate.png'
    },
    {
        title: 'Front-end Programming',
        Text: 'Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans.',
        background: '#FFEEF1',
        imgSrc: 'assets/images/Programming-amico.png'
    }
];

const customer = [
    {
        id: 3
    },
    {
        Name: 'Stephanie',
        Text: 'The instructor’s clear and consistent focus on the four basic principles of graphic design (contrast, repetition, alignment, and proximity) kept the course very focused and efficient. The reading material was clear and well presented.',
        imgSrc: 'assets/images/image.png'
    },
    {
        Name: 'Marcela',
        Text: 'I received my certificate, and I would like to thank you for your support. Your course was challenging, but you were always there supporting me and ready to help. I enjoyed your class tremendously. I look forward to taking another class with you.',
        imgSrc: 'assets/images/image(1).png'
    },
    {
        Name: 'Mario',
        Text: 'Doug adalah instruktur yang sangat baik yang benar-benar tahu barang-barangnya. Dia jelas antusias dengan topik tersebut dan itu membuat kursus ini sangat menyenangkan. Bersedia berbagi ilmunya meskipun.',
        imgSrc: 'assets/images/image(2).png'
    }
];

// make a function to accept the loop
cardLoop = (arr) =>{
for(let i = 0; i<arr.length; i++){
    let fetch = document.querySelector('.cards').innerHTML;
    let dupli = document.querySelector('.courses').innerHTML;
    let clone = document.querySelector('.customer-list').innerHTML;
    if(arr[0].id === 1){
        if(arr[i] === arr[0])continue;
        card.innerHTML = `
        <div class="category-card d-flex justify-content-between ">
                            <div class="card-info">
                                <h5>${arr[i].title}</h5>
                                <p class="text">${arr[i].Text}</p>
                                <a href="">Learn more <img src="assets/images/bx-chevrons-right.svg" alt=""></a>
                            </div>
                            <div class="card-img">
                                <img src="${arr[i].imgSrc}" alt="">
                            </div>
        </div>`+ fetch;
    }else if(arr[0].id === 2){
        if(arr[i] === arr[0])continue;
        courses.innerHTML = `<div class="course-card d-flex justify-content-between">
        <div class="card-img d-flex justify-content-around">
                <img src="${arr[i].imgSrc}" alt="">
        </div>
        <div class="card-info d-flex flex-column justify-content-center">
            <h6>${arr[i].title}</h6>
                <p>${arr[i].Text}</p>
                <a href="" class="d-flex align-items-center">Learn more <box-icon name='chevrons-right'
                color='#fff8f8'></box-icon></a>
        </div>
    </div>` + dupli;
    }else if(arr[0].id === 3){
        if(arr[i] === arr[0])continue;
        list.innerHTML = `
        <div class="customer-card">
        <div class="customer-img">
            <img src="${arr[i].imgSrc}" alt="a picture of Stephanie">
        </div>
        <div class="customer-info">
            <h6 class="customer-name">${arr[i].Name}</h6>
            <p class="customer-details">${arr[i].Text}</p>
        </div>
    </div>` + clone;
    }
};
};
cardLoop(courseList);
cardLoop(learningCat);
cardLoop(customer);
