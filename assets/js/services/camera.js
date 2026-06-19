export async function startCamera(videoElement) {

    try {

        if (
            !navigator.mediaDevices ||
            !navigator.mediaDevices.getUserMedia
        ) {

            throw new Error(
                "La cámara no está disponible."
            );
        }

        const stream =
            await navigator.mediaDevices.getUserMedia({

                video: true,
                audio: false

            });

        videoElement.srcObject =
            stream;

        return stream;

    } catch (error) {

        if (
            error.name ===
            "NotAllowedError"
        ) {

            throw new Error(
                "Permiso de cámara denegado."
            );
        }

        if (
            error.name ===
            "NotFoundError"
        ) {

            throw new Error(
                "No se encontró ninguna cámara."
            );
        }

        throw new Error(
            "Error al acceder a la cámara."
        );
    }
}

export function capturePhoto(
    video,
    canvas
) {

    const ctx =
        canvas.getContext("2d");

    ctx.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );

    return canvas.toDataURL(
        "image/png"
    );
}

export function savePhoto(photoData) {

    localStorage.setItem(
        "escapePhoto",
        photoData
    );
}

export function getSavedPhoto() {

    return localStorage.getItem(
        "escapePhoto"
    );
}

export function stopCamera(stream) {

    if (!stream) return;

    stream
        .getTracks()
        .forEach(track =>
            track.stop()
        );
}