document.addEventListener('DOMContentLoaded', function() {
    const repositories = [
        {
            name: 'mada IST Acquirer Simualtor',
            link: 'https://ibrahemesam.github.io/repo-view/?token=6769746875625f7061745f31314153334a4b5059304a6f34774b38376b68637a355f444f534a5a59367645586f37584d7472414e32357734444a56753877385170694c766f4d5a6b6b50685a54375a32594e454f354f6c634968647a4c_enc&owner=CrazySysTem01&repo=madaSimulator'
        },
        {
            name: 'ARQC Cryptogram Generator',
            link: 'https://ibrahemesam.github.io/repo-view/?token=6769746875625f7061745f31314153334a4b5059304a6f34774b38376b68637a355f444f534a5a59367645586f37584d7472414e32357734444a56753877385170694c766f4d5a6b6b50685a54375a32594e454f354f6c634968647a4c_enc&owner=CrazySysTem01&repo=ARQC_Calculation'
        },
        {
            name: 'Master Thesis Code',
            link: 'https://ibrahemesam.github.io/repo-view/?token=6769746875625f7061745f31314153334a4b5059304a6f34774b38376b68637a355f444f534a5a59367645586f37584d7472414e32357734444a56753877385170694c766f4d5a6b6b50685a54375a32594e454f354f6c634968647a4c_enc&owner=CrazySysTem01&repo=Master-Thesis'
        },
        {
            name: 'Customs Declarations Generator',
            link: 'https://ibrahemesam.github.io/repo-view/?token=6769746875625f7061745f31314153334a4b5059304a6f34774b38376b68637a355f444f534a5a59367645586f37584d7472414e32357734444a56753877385170694c766f4d5a6b6b50685a54375a32594e454f354f6c634968647a4c_enc&owner=CrazySysTem01&repo=customs-edi'
        },
        {
            name: 'Matrix Multiplication',
            link: 'https://ibrahemesam.github.io/repo-view/?token=6769746875625f7061745f31314153334a4b5059304a6f34774b38376b68637a355f444f534a5a59367645586f37584d7472414e32357734444a56753877385170694c766f4d5a6b6b50685a54375a32594e454f354f6c634968647a4c_enc&owner=CrazySysTem01&repo=matrixMultiplication'
        },
        {
            name: 'Tic-tac-toe vs AI',
            link: 'https://ibrahemesam.github.io/repo-view/?token=6769746875625f7061745f31314153334a4b5059304a6f34774b38376b68637a355f444f534a5a59367645586f37584d7472414e32357734444a56753877385170694c766f4d5a6b6b50685a54375a32594e454f354f6c634968647a4c_enc&owner=CrazySysTem01&repo=tictactoeAi'
        },
        {
            name: 'Airlines Booking System',
            link: 'https://ibrahemesam.github.io/repo-view/?token=6769746875625f7061745f31314153334a4b5059304a6f34774b38376b68637a355f444f534a5a59367645586f37584d7472414e32357734444a56753877385170694c766f4d5a6b6b50685a54375a32594e454f354f6c634968647a4c_enc&owner=CrazySysTem01&repo=AirlinesQueue'
        },
        {
            name: 'Hotel Management System',
            link: 'https://ibrahemesam.github.io/repo-view/?token=6769746875625f7061745f31314153334a4b5059304a6f34774b38376b68637a355f444f534a5a59367645586f37584d7472414e32357734444a56753877385170694c766f4d5a6b6b50685a54375a32594e454f354f6c634968647a4c_enc&owner=CrazySysTem01&repo=MergedQueues'
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