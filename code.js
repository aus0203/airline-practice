let flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false }, 
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true }, 
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Taipei', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
    ]; /*Variable = array of objects */

 function welcomeUser(flights){
    
    let userName = prompt("Welcome to Austin Airline! Please enter your username.");
  
    if (userName){
        /*Call username*/
        console.log(`Hello ${userName}, this is the flight today.`);

        /*Call flights info*/
        for(i = 0; i<flights.length; i++){
            console.log(`Flight number: 000${flights[i].id}, from ${flights[i].from} to ${flights[i].to}, price: €${flights[i].cost}.`)
        }

        /*Average cost*/
        let flightsValue = Object.values(flights);
        let sum = (prev, cur) => ({cost: prev.cost + cur.cost});
        let avg = Math.round((flightsValue.reduce(sum).cost / flightsValue.length)*10)/10;
        console.log(`The average price of today's flights is €${avg}.`)

        /*Not direct flight*/
        let inDirectFlights = flights.filter(function(s){return s.scale}).length;
        console.log(`There are ${inDirectFlights} indirect flights today.`);

        /*5 last flights*/
        let last5Flights  = flights.slice(-5);
        let last5Destinations = "";
        for(i = 0; i<last5Flights.length; i++){
            last5Destinations += last5Flights[i].to + ",";
        }
        console.log(`The destinations of last 5 flights is ${last5Destinations}`)

    }
 }

 welcomeUser(flights);


    

