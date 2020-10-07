const normalizeNumberField = (value) => {

    (value || "").replace(/[^\d]/g, "")

    

}

export default normalizeNumberField