export const getLeaves = async (leaves) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_SERVER}/leaves`, {
            method: "GET",
            headers: {
                "x-auth-token": localStorage.getItem("token"),
            },
        });
        const data = await res.json();
        if (res.ok) return data;
        if (!res.ok) throw new Error(data.message);
    } catch (e) {
        throw e.message;
    }
};

export const getLeaveById = async (id) => {
    try {
        const res = await fetch(
            `${process.env.REACT_APP_API_SERVER}/leaves/${id}`,
            {
                method: "GET",
                headers: { "x-auth-token": localStorage.getItem("token") },
            }
        );
        const data = await res.json();
        if (res.ok) return data;
        if (!res.ok) throw new Error(data.message);
    } catch (e) {
        throw e.message;
    }
};

export const applyLeave = async (leave, image) => {
    try {
        const formData = new FormData();
        formData.append("typeOfLeave", leave.typeOfLeave);
        formData.append("details", leave.details);
        formData.append("date", leave.date);
        if (image) {
            formData.append("image", image);
        }

        const res = await fetch(`${process.env.REACT_APP_API_SERVER}/leaves`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": localStorage.getItem("token"),
            },
            body: formData,
        });
        const data = await res.json();
        if (res.ok) return data;
        if (!res.ok) throw new Error(data.message);
    } catch (e) {
        throw e.message;
    }
};

export const updateLeave = async (id, value) => {
    try {
        const res = await fetch(
            `${process.env.REACT_APP_API_SERVER}/leaves/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": localStorage.getItem("token"),
                },
                body: JSON.stringify(value),
            }
        );
        const data = await res.json();
        if (res.ok) return data;
        if (!res.ok) throw new Error(data.message);
    } catch (e) {
        throw e.message;
    }
};
