export const personalInfo = async (info) => {
    try {
        const res = await (`${process.env.REACT_APP_API_SERVER}/profiles`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(info),
        });
        const data = await res.json();
        if (res.ok) localStorage.getItem("token", data);
        if (!res.ok) throw new Error(data.message);
    } catch (e) {
        throw e.message;
    }
};
