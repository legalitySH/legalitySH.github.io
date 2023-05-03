let table = (arr_tag, arr) => {
    let i = 0;
    for (const elem_arr of arr_tag) {
        arr[i++] = elem_arr.textContent;
    }
    return arr;
  }
  let events_arr = [], times_arr = [], position_arr = [];
  let parser = (xmlString => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
      const events = xmlDoc.getElementsByTagName('event');
      const times = xmlDoc.getElementsByTagName('time');
      const positions = xmlDoc.getElementsByTagName('position');
  
      
      events_arr = table(events, events_arr);
      times_arr = table(times, times_arr);
      position_arr = table(positions,position_arr);
      let i = 0;
      document.querySelectorAll('td').forEach((elem, index) => {
        
        //сравниваем index & position когда у нас они равны у нас в elem будет помещться информация и elem будем закрашивать фон 
        if(index == position_arr[i]) {
            elem.insertAdjacentHTML('beforeend', 
            `
            <div class="active">
                <p class="time">${times_arr[i]}</p>
                <p class="event">${events_arr[i]}</p>
            </div>
            `)
            i++;
        }
      })
    //   for (let i = 0; i < ways_arr.length; i++) {
       
    //     document.querySelector('.table').insertAdjacentHTML("beforeend",
  
    //           `<div class="rows">
    //               <p class="time">${times_arr[i]}</p>
    //               <img class="trainImg" src="${train_imgs_arr[i]}">
    //               <p class="way">${ways_arr[i]}</p>
    //           </div>`
  
    //     );
    //   }
    })
  
    async function parseXML() {
      
      let a = await fetch('../schedule.xml');
      let xmlString = await a.text();
      parser(xmlString);
  
    }
  
    parseXML();

