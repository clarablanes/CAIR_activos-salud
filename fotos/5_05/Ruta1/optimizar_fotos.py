import os
from PIL import Image, ImageOps
from pillow_heif import register_heif_opener

# Registrar el lector de fotos de Apple (HEIC)
register_heif_opener()

print("🚀 Empezando el procesado, salvando GPS y limpiando originales...")

for archivo in os.listdir('.'):
    nombre, extension = os.path.splitext(archivo)
    ext_lower = extension.lower()
    
    # Filtramos por los formatos válidos
    if ext_lower in ['.heif', '.heic', '.jpg', '.jpeg']:
        print(f"📸 Procesando: {archivo}")
        
        try:
            img = Image.open(archivo)
            
            # Extraemos los metadatos originales (incluido el GPS)
            metadatos_gps = img.info.get('exif')
            
            # 1. Corregir la orientación si la foto está volcada
            #img = ImageOps.exif_transpose(img)
            
            # 2. Redimensionar a 600px de ancho manteniendo la proporción
            ancho_max = 600
            proporcion = ancho_max / float(img.size[0])
            alto_nuevo = int(float(img.size[1]) * float(proporcion))
            img = img.resize((ancho_max, alto_nuevo), Image.Resampling.LANCZOS)
            
            # 3. Guardar como .JPG en mayúsculas con sus coordenadas
            if metadatos_gps:
                img.save(f"{nombre}.JPG", "JPEG", quality=75, exif=metadatos_gps)
            else:
                img.save(f"{nombre}.JPG", "JPEG", quality=75)
            
            # --- SECCIÓN DE LIMPIEZA ---
            # Si el archivo original era un HEIC/HEIF, lo borramos ahora que ya tenemos el .JPG
            if ext_lower in ['.heif', '.heic']:
                os.remove(archivo)
                print(f"   🗑️ Original HEIC eliminado: {archivo}")
                
            # Si el archivo original era .jpg o .jpeg en minúsculas, también lo borramos
            elif extension in ['.jpg', '.jpeg']:
                os.remove(archivo)
                
        except Exception as e:
            print(f"⚠️ Error al procesar {archivo}: {e}")

print("🎉 ¡Proceso terminado! Carpeta limpia: solo quedan tus .JPG optimizados con GPS.")