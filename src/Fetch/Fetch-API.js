export async function fetch_player(data) {
    try {
        const response = await fetch(`https://rummikub-app-xpress-9db7df5621fa.herokuapp.com/api/player`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const resp = await response.json();
        console.log(resp)

        return resp;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function fetch_addPlayer(tag) {
    fetch(`https://rummikub-app-xpress-9db7df5621fa.herokuapp.com/api/addPlayer`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify({ tag: tag })
    })
        .then(res => res.json())
        .then(data => {
            console.log('added player', data)
        }).catch(err => {
            console.log(err)
        })


}

// export async function fetchData(data) {
//     try {
//         const response = await fetch(`https://rummikub-app-xpress-9db7df5621fa.herokuapp.com/api/match`,{
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json",
//                 'X-Requested-With': 'XMLHttpRequest',
//             },
//             body: JSON.stringify(data)
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const resp = await response.json();
//         console.log(resp)

//         return resp;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error;
//     }
// }

export async function fetch_match(data) {
    try {
        const response = await fetch(`https://rummikub-app-xpress-9db7df5621fa.herokuapp.com/api/match`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const resp = await response.json();
        console.log(resp)

        return resp;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Example usage:
// (async () => {
// try {
// const data = await fetchData('https://api.example.com/data');
// console.log('Fetched data:', data);
// } catch (error) {
// console.error('Error occurred:', error);
// }
// })();