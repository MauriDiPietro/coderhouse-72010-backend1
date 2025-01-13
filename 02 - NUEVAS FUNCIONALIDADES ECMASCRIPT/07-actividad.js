class TicketManager {
    #priceBaseGain = 0.15;
    constructor(){
        this.events = [];
    }

    #newId(){
        let maxId = 0;
        this.events.map((event)=>{
            if(event.id > maxId) maxId = event.id;
        })
        return maxId;
    }

    addEvent(name, site, price, capacity = 50, date = new Date().toLocaleDateString()) {
        const event = {
            id: this.#newId() + 1,
            name,
            site,
            capacity,
            price: price + this.#priceBaseGain,
            date,
            participants: []
        };
        this.events.push(event);
    }

    getEvents(){
        return this.events;
    }

    getEvent(id){
        return this.events.find((event) => event.id === id);
    }

    addUser(idEvent, user){
        const event = this.getEvent(idEvent);
        if(!event) throw new Error('Event if not exist!')
        if(!event.participants.includes(user)) event.participants.push(user);
        return 'user add to event'
    }

    eventTour(idEvent, newSite, newDate, newPrice, newCapacity){
        const event = this.getEvent(idEvent);
        if(!event) throw new Error('Event if not exist!')
        const newEvent = {
            ...event,
            id: this.#newId() + 1,
            site: newSite,
            date: newDate, 
            price: newPrice + this.#priceBaseGain,
            capacity: newCapacity,
            participants: []
        };
        this.events.push(newEvent);
        return newEvent;
    }
}

const ticketManager = new TicketManager();

ticketManager.addEvent("Recital de Los Piojos", "Córdoba", 200000, 5600000);
ticketManager.addEvent("Recital de Los Palmeras", "Córdoba", 203000, 6700000);
ticketManager.addEvent("Recital de La Vela Puerca", "Córdoba", 400000, 80000);


ticketManager.addUser(1, 'Raul')
ticketManager.addUser(1, 'Alexis')
ticketManager.addUser(1, 'Diego')
ticketManager.addUser(2, 'Walter')
ticketManager.addUser(2, 'Raul')
ticketManager.addUser(3, 'Roman')

ticketManager.eventTour(1, 'Punta del Este', '20/1/2025', 150000, 78954)

ticketManager.addUser(4, 'Raul')


console.log(ticketManager.getEvents());


