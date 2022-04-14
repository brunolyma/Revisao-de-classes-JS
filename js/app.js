class App {
    constructor() {
    this.spaceship = null
    }

    start() {
        this.register()
        let chosenOption
        do {
            chosenOption = this.showInitialMenu()
            this.redirect(chosenOption)
        } while(chosenOption != '3')
        this.printAndExit()    
    }

    register() {
        let spaceshipName = prompt('Qual o nome da espaçonave?')
        let crewQuantity = prompt('Qual a quantidade de tripulantes a bordo?')
        let spaceshipKind = this.spaceshipType()
        if(spaceshipKind == '1') {
            let weaponsQuantity = prompt('Qual a quantidade de armas na nave?')
            this.spaceship = new BattleSpaceship(spaceshipName, crewQuantity, weaponsQuantity)
        } else {
            let sitsQuantity = prompt('Qual a quantidade de assentos na nave?')
            this.spaceship = new TransportSpaceship(spaceshipName, crewQuantity, sitsQuantity)
        }
    }

    spaceshipType() {
        let chosenOption
        while(!['1', '2'].includes(chosenOption)) {
            chosenOption = prompt('Qual o tipo da nave?\n\n1-Batalha\n2-Transporte')
        }
        return chosenOption
    }

    showInitialMenu() {
        const promptMessage ='O que deseja fazer?\n1-Acelerar a nave\n2- Trocar a nave\n3-Sair do programa'
        let chosenOption = prompt(promptMessage)
        while(!['1', '2', '3'].includes(chosenOption)) {
            chosenOption = prompt(promptMessage)
        }
        return chosenOption
    }

    redirect(chosenOption) {
        switch(chosenOption) {
            case '1':
                this.accelerateSpaceship()
                break;
            case '2':
                this.register()
                break;
        }
    }

    accelerateSpaceship() {
        let acceleration = Number(prompt('Quanto você deseja acelerar a nave?')).toFixed()
        this.spaceship.speedUp(acceleration)
    }

    printAndExit() {
        let finalMessage = `Nome da Espaçonave: ${this.spaceship.name}\nNúmero de Tripulantes: ${this.spaceship.crewQuantity}\nVelocidade: ${this.spaceship.velocity}`
        alert(finalMessage)
    }
}