export const ratePerformance = async (ratings, id) => {
    try {
        const res = await fetch(
            `${process.env.REACT_APP_API_SERVER}/performance/${id}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": localStorage.getItem("token"),
                },
                body: JSON.stringify(ratings),
            }
        );
        const data = await res.json();
        console.log(data);
        if (res.ok) return data;
        if (!res.ok) throw new Error(data.message);
    } catch (e) {
        throw e.message;
    }
};

export const getScoreById = async (id) => {
    try {
        const res = await fetch(
            `${process.env.REACT_APP_API_SERVER}/performance/${id}`,
            {
                method: "GET",
                headers: {
                    "x-auth-token": localStorage.getItem("token"),
                },
            }
        );
        const data = await res.json();
        console.log(data);
        if (res.ok) return data;
        if (!res.ok) throw new Error(data.message);
    } catch (e) {
        throw e.message;
    }
};

export const getAllPerformanceScores = async () => {
    try {
        const res = await fetch(
            `${process.env.REACT_APP_API_SERVER}/performance`,
            {
                method: "GET",
                headers: {
                    "x-auth-token": localStorage.getItem("token"),
                },
            }
        );
        const data = await res.json();
        if (res.ok) return data;
        if (!res.ok) throw new Error(data.message);
    } catch (e) {
        throw e.message;
    }
};
