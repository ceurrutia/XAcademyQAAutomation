describe('Login de usuario', () => {

  //inicio de sesion con pass vacio
  it('Debería no permitir iniciar sesión sin contrasenia', () => {
    cy.visit('https://ceurrutia.github.io/EducacionITfinetech/');

    //inputs de login y el click
    cy.get('#loginEmail').type('cecilia.test@example.com')
    //cy.get('#loginContraseña').type('');
   
    cy.contains('button', 'Ingresar').click()
    cy.contains('La contraseña no puede estar vacía')

    // 1 seg de wait
    cy.wait(1000);
  });
});

//inicio de sesión con credenciales válidas
describe('El usuario ingresa con credenciales válidas', () => {
    let userData; //variable de datos

    beforeEach(() => {
        cy.fixture('existingUser').then((user) => {
            userData = user;
            //inyecta el localstore porque si no no existe
            let usuarios = [{
                nombre: 'm',
                email: userData.email,
                contraseña: userData.password,
                saldo: 0,
                movimientos: []
            }];
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
        });
    });

    it('Debería permitir iniciar sesión a un usuario registrado', () => {
        cy.visit('https://ceurrutia.github.io/EducacionITfinetech/');

        // Inputs de login y el click
        cy.get('#loginEmail').type(userData.email);
        cy.get('#loginContraseña').type(userData.password);
        cy.contains('button', 'Ingresar').click();

        cy.url().should('include', '/transacciones.html');
        cy.log('Login exitoso, redirigido a transacciones.html');
    });
});