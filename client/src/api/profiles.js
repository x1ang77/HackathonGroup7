export const createPersonalInfo = async (info) => {
    try {
        const res = await fetch(
            `${process.env.REACT_APP_API_SERVER}/profiles`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": localStorage.getItem("token"),
                },
                body: JSON.stringify(info),
            }
        );
        const data = await res.json();
        if (res.ok) return data;
        if (!res.ok) throw new Error(data.message);
    } catch (e) {
        throw e.message;
    }
};

export const getPersonalInfo = async () => {
    try {
        const res = await fetch(
            `${process.env.REACT_APP_API_SERVER}/profiles`,
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

export const editPersonalInfo = async (info) => {
    try {
        const res = await fetch(
            `${process.env.REACT_APP_API_SERVER}/profiles`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": localStorage.getItem("token"),
                },
                body: JSON.stringify(info),
            }
        );
        const data = await res.json();
        if (res.ok) return data;
        if (!res.ok) throw new Error(data.message);
    } catch (e) {
        throw e.message;
    }
};
