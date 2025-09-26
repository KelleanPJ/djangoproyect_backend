function mostrarHome(btn) {
  document.getElementById("submenu").innerHTML = "";
  const contenido = document.getElementById("contenido");
  contenido.innerHTML = `
    <div class="home-container">
      <img src="https://media.istockphoto.com/id/949190756/es/foto/varios-equipos-del-deporte-en-pasto.jpg?s=612x612&w=0&k=20&c=gnM5SjZ4AZ7FfUK8Z9Tl96mneHfLAZbIuawD6SBUG9k=" alt="imagen home" class="home-img">
      <div class="texto-superpuesto">¡BIENVENIDOS!</div>
    </div>
  `;
  marcarBotonPrincipalActivo(btn); // Botón "Home" activo
}


function mostrarDeportes(btn) {
  marcarBotonPrincipalActivo(btn);

  const submenu = document.getElementById("submenu");
  submenu.innerHTML = `
    <button class="submenu-btn" onclick="mostrarFutbol(this)">Fútbol</button>
    <button class="submenu-btn" onclick="mostrarBasquetbol(this)">Básquetbol</button>
    <button class="submenu-btn" onclick="mostrarBeisbol(this)">Béisbol</button>
    <button class="submenu-btn" onclick="mostrarTenis(this)">Tenis</button>
  `;
  const contenido = document.getElementById("contenido");

    
  contenido.innerHTML = ''; // Limpia el contenido
  const sliderContainer = document.createElement('div');
  sliderContainer.className = 'slider-container';

  const sliderTrack = document.createElement('div');
  sliderTrack.className = 'slider-track';

  sliderTrack.innerHTML = `
    <img src="https://static.vecteezy.com/system/resources/previews/000/468/341/non_2x/sport-doodle-collage-vector.jpg" />
    <img src="https://wallpapers.com/images/hd/best-sports-1920-x-1080-background-i6x152n16lp054lw.jpg" />
    <img src="https://img.freepik.com/premium-photo/collage-diverse-sports-equipment-promoting-fitness-recreational-games_892776-3404.jpg" />
    <img src="https://img.freepik.com/premium-photo/collage-diverse-sports-equipment-promoting-fitness-recreational-games_1015293-103554.jpg" />
    <img src="https://t4.ftcdn.net/jpg/01/89/51/79/360_F_189517961_1WakCg9Gtz7TOOkCF4IKXM7FLE1vz09q.jpg" />
    <img src="https://thumbs.dreamstime.com/b/assorted-sports-equipment-sunset-sunshine-vivid-colorful-theme-65074048.jpg" />
    <img src="https://static.vecteezy.com/system/resources/previews/000/468/341/non_2x/sport-doodle-collage-vector.jpg" />
    <img src="https://wallpapers.com/images/hd/best-sports-1920-x-1080-background-i6x152n16lp054lw.jpg" />
    <img src="https://img.freepik.com/premium-photo/collage-diverse-sports-equipment-promoting-fitness-recreational-games_892776-3404.jpg" />
  `;

  sliderContainer.appendChild(sliderTrack);
  contenido.appendChild(sliderContainer);
}




/*----------------------*/

function mostrarFutbol(btn) {
  marcarSubmenuActivo(btn);
  const contenido = document.getElementById("contenido");
  contenido.innerHTML = ''; // Limpia el contenido

  contenido.innerHTML = `

    <div class="galeria">
      <div class="item">
        <img src="https://www.cienporcientofutbol.cl/cdn/shop/files/IP8455_FC_eCom_1024x1024.jpg?v=1710361684" />
        <p>Camiseta Adidas 2025</p>
      </div>
      <div class="item">
        <img src="https://image.cdn1.buscalibre.com/3548477.RS500x500.jpg" />
        <p>Balón Oficial FIFA Qatar</p>
      </div>
      <div class="item">
        <img src="https://contents.mediadecathlon.com/p2009391/k$1b7b69029c3c00b11b2f3685c81ceec2/guantes-de-arquero-kipsta-f100-resist-grip-ninos-negro-amarillo.jpg?format=auto&quality=40&f=800x800" />
        <p>Guantes Kipsta Resist Grip</p>
      </div>
      <div class="item">
        <img src="https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dw61d0085b/images/hi-res/198480637424_1_20250403-mrtPeru.jpg?sw=500&sh=500" />
        <p>Zapatillas de fútbol Nike</p>
      </div>
    </div>
  `;
}


function mostrarBasquetbol(btn) {
  marcarSubmenuActivo(btn);
  const contenido = document.getElementById("contenido");
  contenido.innerHTML = ''; // Limpia el contenido

  contenido.innerHTML = `

    <div class="galeria">
      <div class="item">
        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6c247c8-ffbf-406d-9f08-1553c7edb4c5/LAL+MNK+DF+SWGMN+JSY+ICN+22.png" />
        <p>Camiseta Los Angeles Lakers</p>
      </div>
      <div class="item">
        <img src="https://i5.walmartimages.com/seo/TD-Air-Jordan-11-Retro-Cherry-2022-378040-116_68ca3fe0-d7b1-4fdb-afe1-3ef7f35ccd42.79e6192e95903bc2c995d6b79f761a38.jpeg" />
        <p>Zapatillas Air Jordan</p>
      </div>
      <div class="item">
        <img src="https://cdnx.jumpseller.com/sportway/image/59858529/Balon_Match_y_basquey-08.jpg?1743599020" />
        <p>Balon Molten BG2000</p>
      </div>
      <div class="item">
        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b3300db2-06c3-4f6e-849d-b2e75bce21f4/NIKE+SWOOSH+HEADBAND.png" />
        <p>Vincha Nike Swoosh</p>
      </div>
    </div>
  `;
}


function mostrarBeisbol(btn) {
  marcarSubmenuActivo(btn);
  const contenido = document.getElementById("contenido");
  contenido.innerHTML = ''; // Limpia el contenido 
  contenido.innerHTML = `

    <div class="galeria">
      <div class="item">
        <img src="https://sparta.cl/media/catalog/product/m/l/mlbjs520220-blu.png?optimize=high&bg-color=255,255,255&fit=bounds&height=550&width=600&canvas=600:550" />
        <p>Camiseta Dodgers Los Angeles</p>
      </div>
      <div class="item">
        <img src="https://contents.mediadecathlon.com/p1574462/k$4cfc1a5c70a84459be46bb5d8ff60324/guante-de-beisbol-mano-derecha-ba150-negroslashazul.jpg?format=auto&quality=40&f=800x800" />
        <p>Guante de Béisbol BA150</p>
      </div>
      <div class="item">
        <img src="https://i.ebayimg.com/thumbs/images/g/VokAAeSwt~loGFDb/s-l1200.jpg" />
        <p>Pelota Oficial Rawlings</p>
      </div>
      <div class="item">
        <img src="https://sportline.cl/cdn/shop/files/Fotos_Rawlings__Mesa_de_trabajo_120221123-19694-13jskdq.png?v=1722013228" />
        <p>Bate de Aluminio Rawlings</p>
      </div>
    </div>
  `;
}


function mostrarTenis(btn) {
  marcarSubmenuActivo(btn);
  const contenido = document.getElementById("contenido");
  contenido.innerHTML = ''; // Limpia el contenido 

  contenido.innerHTML = `

    <div class="galeria">
      <div class="item">
        <img src="https://images-cdn.ubuy.co.in/653a886dc3ba9f38f32b3649-butterfly-mito-table-tennis-shirt.jpg" />
        <p>Polera Tenis Butterfly Mito</p>
      </div>
      <div class="item">
        <img src="https://sparta.cl/media/catalog/product/4/6/463901.920.800.png?optimize=high&bg-color=255,255,255&fit=bounds&height=550&width=600&canvas=600:550" />
        <p>Raqueta de Tenis Wilson Pro</p>
      </div>
      <div class="item">
        <img src="https://deportesregol.com/cdn/shop/files/7010_Pelota_Tenis_Wonder_Tarro_X_3_TSP_3125.jpg?v=1743616624" />
        <p>Pelotas de Tenis Wonder Sport</p>
      </div>
      <div class="item">
        <img src="https://contents.mediadecathlon.com/p2507019/k$bfb9ce22323bca45c599ccc43f62b673/munequera-tenis-artengo-tp-100-azul-marino.jpg?format=auto&quality=40&f=800x800" />
        <p>Muñequera Negra Artengo</p>
      </div>
    </div>
  `;
}




function marcarSubmenuActivo(botonClickeado) {
  const botones = document.querySelectorAll(".submenu-btn");
  botones.forEach(btn => {
    btn.classList.remove("active-submenu");
    btn.classList.add("inactive-submenu");
  });
  botonClickeado.classList.remove("inactive-submenu");
  botonClickeado.classList.add("active-submenu");
}


function marcarBotonPrincipalActivo(botonClickeado) {
  const botonesPrincipales = document.querySelectorAll(".main-btn");
  botonesPrincipales.forEach(btn => {
    btn.classList.remove("active-main-btn");
  });
  botonClickeado.classList.add("active-main-btn");
}


function mostrarContacto(btn) {
  document.getElementById("submenu").innerHTML = "";
  const contenido = document.getElementById("contenido");

  contenido.innerHTML = `
    <form id="contactForm">
      <input type="text" id="rut" placeholder="Sin puntos y con guion" maxlength="10" /><br><br>
      <input type="text" id="nombre" placeholder="Nombre y Apellido" maxlength="80" /><br><br>
      <input type="email" id="correo" placeholder="Correo Electrónico" /><br><br>
      <textarea id="mensaje" rows="6" maxlength="500" placeholder="Escribe tu mensaje"></textarea><br><br>
      <button class="enviar" type="submit">Enviar</button>
      <div class="mensaje" id="mensajeError" style="color: red; margin-top: 10px;"></div>
    </form>
  `;

  document.getElementById("contactForm").addEventListener("submit", validarFormulario);
  marcarBotonPrincipalActivo(btn);
}


function validarFormulario(e) {
  e.preventDefault();

  const rut = document.getElementById("rut").value.trim();
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const mensajeError = document.getElementById("mensajeError");

  let errores = [];

  if (!/^\d{1,8}-\d{1}$/.test(rut)) {
    errores.push("⚠️ El RUT debe tener solo números y un guion antes del dígito verificador (ej: 12345678-9).");
  }

  if (nombre.length < 3 || nombre.length > 100) {
    errores.push("⚠️ El nombre debe tener al menos 3 caracteres.");
  }

  if (correo === "") {
    errores.push("⚠️ El correo electrónico no puede estar vacío.");
  }

  if (mensaje.length <= 10) {
    errores.push("⚠️ El mensaje es muy corto o está vacío.");
  }

  if (errores.length > 0) {
    mensajeError.innerHTML = errores.map(err => `<p>${err}</p>`).join("");
    mensajeError.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    mensajeError.style.padding = "3px";
    mensajeError.style.borderRadius = "5px";
    mensajeError.style.color = "red";
  } else {
    mensajeError.innerHTML = "";
    mensajeError.style.backgroundColor = "";
    mensajeError.style.padding = "";
    mensajeError.style.borderRadius = "";
    mensajeError.style.color = "";

    const codigo = Math.random().toString(36).substring(2, 7).toUpperCase();
    document.getElementById("contenido").innerHTML = `
      <p style="
        font-size: 40px;
        color: yellow;
        background-color: rgba(0, 0, 0, 0.6); /* Fondo blanco atenuado al 80% */
        font-weight: bold; /* Texto en negrita */
        padding: 20px; /* Un poco de espacio alrededor del texto */
        border-radius: 10px; /* Bordes redondeados para el fondo */
        display: inline-block; /* Para que el fondo solo ocupe el ancho del contenido */
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      ">
        ✅ Datos enviados correctamente!<br><br> CÓDIGO DE ENVÍO: <strong>${codigo}</strong><br><br>
        <span style="font-size: 20px;">Se ha enviado una copia a: <br></span>
        <span style="font-size: 20px; color:white">${correo}</span>
      </p>
    `;
  }
}



function generarCodigoEnvio() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let codigo = "";
  for (let i = 0; i < 5; i++) {
    codigo += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return codigo;
}
