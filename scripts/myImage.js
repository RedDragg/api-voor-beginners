const mySection = document.querySelector('section:nth-of-type(1)');

getData(myURL).then( data201 => {
    //ik roep de url van mijn avatar op
    let myAvatar = data201.data.avatar;

    //ik roep de url van mijn naam op
    let myName = data201.data.name;

    //ik maak een image element
    let myImg = document.createElement("img");
    //ik verander mijn src van de img element naar de url van mijn avatar
    myImg.src = myAvatar;
    //ik verander de alt naar de url van mijn naam
    myImg.alt = myName
    
    //
    mySection.append(myImg);

});









/**************/
/* SPIEKBRIEF */
/**************/

// const mySection = document.querySelector('section:nth-of-type(1)');

// getMyImage();

// function getMyImage() {
// 	getData(urlMe).then( data => {  
// 		const myData = data.data;
// 		let myName = myData.name;
// 		let myImgSrc = myData.avatar;

// 		if (!myImgSrc) {
// 			myImgSrc = "images/placeholder1.svg";
// 		}

// 		const myImg = document.createElement("img");

// 		myImg.src = myImgSrc;
// 		myImg.alt = myName;

// 		mySection.append(myImg);
// 	});	
// }