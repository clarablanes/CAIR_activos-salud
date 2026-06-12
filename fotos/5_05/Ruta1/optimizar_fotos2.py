import os
from PIL import Image, ImageOps
from pillow_heif import register_heif_opener

# Registrar el lector de fotos de Apple (HEIC)
register_heif_opener()

print("🚀 Empezando el procesado corregido para Web/QGIS...")

for archivo in os.listdir('.'):
    nombre, extension = os.path.splitext(archivo)
    ext_lower = extension.lower()
    
    # Filtramos por los formatos válidos (pesca .heic, .jpg, .jpeg, .JPEG, etc.)
    if ext_lower in ['.heif', '.heic', '.jpg', '.jpeg']:
        print(f"📸 Procesando: {archivo}")
        
        try:
            img = Image.open(archivo)
            
            # 1. Corregir la orientación si la foto está volcada (físicamente)
            img = ImageOps.exif_transpose(img)
            
            # 2. Extraer los metadatos EXIF modificados tras el transpose
            metadatos_exif = img.getexif()
            
            # 3. Redimensionar a 600px de ancho manteniendo la proporción
            ancho_max = 600
            proporcion = ancho_max / float(img.size[0])
            alto_nuevo = int(float(img.size[1]) * float(proporcion))
            img = img.resize((ancho_max, alto_nuevo), Image.Resampling.LANCZOS)
            
            # Convertir a RGB por si alguna imagen viene en otro modo antes de guardar en JPG
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
            
            # 4. Guardar como .JPG con los metadatos corregidos
            if metadatos_exif:
                # Convertimos los metadatos al formato que entiende 'save'
                img.save(f"{nombre}.JPG", "JPEG", quality=75, exif=metadatos_exif.tobytes())
            else:
                img.save(f"{nombre}.JPG", "JPEG", quality=75)
            
            # --- SECCIÓN DE LIMPIEZA COMPLETAMENTE OPTIMIZADA ---
            # Si el archivo original era un HEIC/HEIF, lo borramos
            if ext_lower in ['.heif', '.heic']:
                os.remove(archivo)
                print(f"   🗑️ Original HEIC eliminado: {archivo}")
                
            # Si el archivo original NO se llamaba exactamente '.JPG' en mayúsculas,
            # lo borramos para evitar duplicados (así limpia .jpg, .jpeg y .JPEG)
            elif extension != '.JPG':
                os.remove(archivo)
                print(f"   🗑️ Original antiguo eliminado: {archivo}")
                
        except Exception as e:
            print(f"⚠️ Error al procesar {archivo}: {e}")

print("🎉 ¡Proceso terminado! Fotos listas para qgis2web sin giros raros.")