function checkPassword() {
    const correctPassword = '240523';
    const userPassword = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    if (userPassword === correctPassword) {
        messageElement.innerHTML = `Mi amor, se que no he sido el mejor, he tenido malas acciones y no he sabido ser un caballero, pero te juro que hago un esfuerzo por cambiar eso y ser el novio que mereces, no te imaginas cuanto te amo, me duele saber mucho que te vas, lo repito mucho porque enserio me ha afectado y me ha puesto triste todos estos dias;( me perdonas?`;
    } else {
        messageElement.innerHTML = 'Contraseña incorrecta. Inténtalo de nuevo.';
    }
}
