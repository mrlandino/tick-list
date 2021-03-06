const getClimbs = () => {
    return (
        fetch('https://tick-list-api.herokuapp.com/api/v1/climbs')
            .then(response => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error();
            }
        }) 
    )
}

const postClimb = (climbPosting) => {
    return (
        fetch('https://tick-list-api.herokuapp.com/api/v1/climbs', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(climbPosting)
        })
        .then(response => response.json())
    )
}

const patchClimb = (patchClimb) => {
    return (
        fetch('https://tick-list-api.herokuapp.com/api/v1/climbs', {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patchClimb)
        })
        .then(response => response.json())
    )
}

const deleteSelectedClimb = (deleteClimb) => {
    return (
        fetch('https://tick-list-api.herokuapp.com/api/v1/climbs', {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(deleteClimb)
        })
        .then(response => response.json())
    )
}

export { getClimbs, postClimb, patchClimb, deleteSelectedClimb }