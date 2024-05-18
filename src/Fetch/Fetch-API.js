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
        console.log(resp);
        

        return resp;

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function fetch_player_id(data) {
    try {
        const response = await fetch(`https://rummikub-app-xpress-9db7df5621fa.herokuapp.com/api/player_id`,{
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
        console.log(resp);
        

        return resp;

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function fetch_addPlayer(data) {
    try {
        const response = await fetch(`https://rummikub-app-xpress-9db7df5621fa.herokuapp.com/api/addPlayer`,{
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

        //const resp = await response.json();
        //console.log(resp)

        return;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function fetch_addMatch(data) {
    try {
        const response = await fetch(`https://rummikub-app-xpress-9db7df5621fa.herokuapp.com/api/addMatch`,{
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

        //const resp = await response.json();
        //console.log(resp)

        return;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

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

export async function fetch_match_latest(data) {
    try {
        const response = await fetch(`https://rummikub-app-xpress-9db7df5621fa.herokuapp.com/api/match_latest`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'X-Requested-With': 'XMLHttpRequest',
            }
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

export async function fetch_matchScore(data) {
    try {
        const response = await fetch(`https://rummikub-app-xpress-9db7df5621fa.herokuapp.com/api/matchScore`,{
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return;

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function fetch_matchTime(data) {
    try {
        const response = await fetch(`https://rummikub-app-xpress-9db7df5621fa.herokuapp.com/api/matchTime`,{
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function fetch_matchWinner(data) {
    try {
        const response = await fetch(`https://rummikub-app-xpress-9db7df5621fa.herokuapp.com/api/matchWinner`,{
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
