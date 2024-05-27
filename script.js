document.addEventListener('DOMContentLoaded', function() {
    const repositories = [
        {
            name: 'mada IST Acquirer Simualtor',
            link: 'https://ibrahemesam.github.io/repo-view/?token=6769746875625f7061745f31314153334a4b505930365a396c5130366d373339475f4636336d387a363172455a6e547945664c717553707037506d796e674f71734b4c764a4a567631366145474349524443454d3265446c5777663665_enc&owner=CrazySysTem01&repo=madaSimulator'
        },
        {
            name: 'ARQC Cryptogram Generator',
            link: 'https://ibrahemesam.github.io/repo-view/?token=6769746875625f7061745f31314153334a4b505930365a396c5130366d373339475f4636336d387a363172455a6e547945664c717553707037506d796e674f71734b4c764a4a567631366145474349524443454d3265446c5777663665_enc&owner=CrazySysTem01&repo=ARQC_Calculation'
        },
        {
            name: 'Master Thesis Code',
            link: 'https://ibrahemesam.github.io/repo-view/?token=6769746875625f7061745f31314153334a4b505930365a396c5130366d373339475f4636336d387a363172455a6e547945664c717553707037506d796e674f71734b4c764a4a567631366145474349524443454d3265446c5777663665_enc&owner=CrazySysTem01&repo=Master-Thesis'
        },
        {
            name: 'Customs Declarations Generator',
            link: 'https://ibrahemesam.github.io/repo-view/?token=6769746875625f7061745f31314153334a4b505930365a396c5130366d373339475f4636336d387a363172455a6e547945664c717553707037506d796e674f71734b4c764a4a567631366145474349524443454d3265446c5777663665_enc&owner=CrazySysTem01&repo=customs-edi'
        },
        {
            name: 'Matrix Multiplication',
            link: 'https://ibrahemesam.github.io/repo-view/?token=6769746875625f7061745f31314153334a4b505930365a396c5130366d373339475f4636336d387a363172455a6e547945664c717553707037506d796e674f71734b4c764a4a567631366145474349524443454d3265446c5777663665_enc&owner=CrazySysTem01&repo=matrixMultiplication'
        },
        {
            name: 'Tic-tac-toe vs AI',
            link: 'https://ibrahemesam.github.io/repo-view/?token=6769746875625f7061745f31314153334a4b505930365a396c5130366d373339475f4636336d387a363172455a6e547945664c717553707037506d796e674f71734b4c764a4a567631366145474349524443454d3265446c5777663665_enc&owner=CrazySysTem01&repo=tictactoeAi'
        },
        {
            name: 'Airlines Booking System',
            link: 'https://ibrahemesam.github.io/repo-view/?token=6769746875625f7061745f31314153334a4b505930365a396c5130366d373339475f4636336d387a363172455a6e547945664c717553707037506d796e674f71734b4c764a4a567631366145474349524443454d3265446c5777663665_enc&owner=CrazySysTem01&repo=AirlinesQueue'
        },
        {
            name: 'Hotel Management System',
            link: 'https://ibrahemesam.github.io/repo-view/?token=6769746875625f7061745f31314153334a4b505930365a396c5130366d373339475f4636336d387a363172455a6e547945664c717553707037506d796e674f71734b4c764a4a567631366145474349524443454d3265446c5777663665_enc&owner=CrazySysTem01&repo=MergedQueues'
        }
    ];

    const buttonContainer = document.getElementById('button-container');

    repositories.forEach(repo => {
        const button = document.createElement('button');
        button.textContent = repo.name;
        button.onclick = () => window.open(repo.link, '_blank');
        buttonContainer.appendChild(button);
    });
});