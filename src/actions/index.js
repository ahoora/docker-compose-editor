import * as C from "../constants";

export function addService(service) {
    return {
        type: C.ADD_SERVICE,
        payload: service || {}
    };
}

export function showServiceDetails(service) {
    return {
        type: C.SHOW_SERVICE_DETAILS,
        payload: service
    }
}

export function openFile(data) {
    return {
        type: C.OPEN_FILE,
        payload: data
    }
}

export function updateService(service) {
    return {
        type: C.UPDATE_SERVICE,
        payload: service
    }
}

export function updateEnvVariable(payload) {
    return {
        type: C.UPDATE_ENV_VARIABLE,
        payload: payload
    }
}

export function addEnvVariable() {
    return {
        type: C.ADD_ENV_VARIABLE
    }
}

export function deleteEnvVariable(idx) {
    return {
        type: C.DELETE_ENV_VARIABLE,
        payload: {
            idx: idx
        }
    }
}

export function importComposeFile(composeFile) {
    return {
        type: C.IMPORT_COMPOSE_FILE,
        payload: composeFile
    }
}
