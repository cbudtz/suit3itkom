function clear(form) {
    form.A.value = "";
    form.B.value = "";
    form.C.value = "";
}

function validatedForm(form) {
    debugger;
    console;
    if (!form.A.value || !form.B.value) {
        alert("Du skal udfylde et tal!");
        return false;
    }
}

function compute(form) {
    if (!validatedForm(form)){return false;}
    form.C.value = parseFloat(form.A.value) + parseFloat(form.B.value);
}