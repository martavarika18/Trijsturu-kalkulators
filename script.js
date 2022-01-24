function nolasa() {
    const malas = document.getElementsByClassName("mala");

    const m1 = parseFloat(mala1.value);
    const m2 = parseFloat(mala2.value);
    const m3 = parseFloat(mala3.value);

    if (m1 > 0 && m2 > 0 && m3 > 0) {//pārbauda vai malu gaurmi ir lielāki par 0
        console.log({ m1, m2, m3 });//konsolē izvada malu garumus
        return { m1, m2, m3 };
    } else {
        console.log(false);//konsolē izdrukā false, ja kāda no malām ir 0
        return false;
    }
}

function perimetrs(m1, m2, m3) {

    const m = nolasa();
    m1 = m.m1; m2 = m.m2; m3 = m.m3;
    console.log(m1, m2, m3);
    const p = m1 + m2 + m3;//tiek aprēķināts perimetrs
    console.log(p);
    return (p);
}

function pusper(m1, m2, m3) {
    const pusper = perimetrs(m1, m2, m3) / 2;//tiek aprēķināts pusperimetrs
    console.log(pusper);
    return (pusper);

}
function laukums(m1, m2, m3) {
    const pusper = perimetrs(m1, m2, m3) / 2;
    let tlaukums = Math.sqrt(pusper * ((pusper - m1) * (pusper - m2) * (pusper - m3)));//aprēķina laukumu
    console.log(tlaukums);
    return tlaukums;

}
function irTrijsturis(m1, m2, m3) {


    if (m1 < m2 + m3 && m2 < m1 + m3 && m3 < m1 + m2) {//pārbauda vai jebkuru 2 malu garumu summa ir lielāka par trešo malu
        return true;
    } else {

        return false;
    }
}

function rezultats() {
    const m = nolasa();
    m1 = m.m1; m2 = m.m2; m3 = m.m3;
    console.log(m1, m2, m3);
    if (!nolasa()) {
        t = "Ievadītie dati ir nekorekti, kāda no malām ir 0. ";
    } else {
        if (irTrijsturis(m1, m2, m3) == false) {
            t = "Trijstūris neeksistē, jo jebkuru 2 malu garumu summai ir jābūt lielākai par trešo malu.";
        } else {
            t = "Trijstūris ar malu garumiem " + m1 + " , " + m2 + " , " + m3 + " eksistē. ";//izdrukā info par trijstūriem katram ievadītajam trijstūrim ar ievadītajiem malu garumiem.
            if (m1 == m2 && m2 == m3) { //pārbauda vai divas malas ir vienādas
                t += "Tas ir vienādmalu trijstūris. ";
            } else {
                if (m1 == m2 || m2 == m3 || m1 == m3) {//pārbauda vai visas trīs malas ir vienādas
                    t += "Tas ir vienādsānu trijstūris. ";
                }
            }

            const p = perimetrs(m1, m2, m3);
            const s = Math.round(laukums(m1, m2, m3) * 100) / 100;
            t += "Perimetrs ir " + p + " centimetri un laukums ir " + s + " kvadrātcentimetri.";

        }
    }
    console.log(t);
    return t;
}

function izvadaTekstu() {
    const teksts = rezultats()
    console.log(teksts);
    const sakne = document.getElementById("izvade");
    const raksti = document.createElement("p");
    sakne.innerHTML = teksts;
    sakne.appendChild(raksti);

}