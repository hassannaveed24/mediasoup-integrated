const initialState =
{
    roomId: null,
    peerId: null,
    displayName: null,
    device: null,
    handlerName: null,
    useSimulcast: null,
    useSharingSimulcast: null,
    forceTcp: null,
    produce: null,
    consume: null,
    forceH264: null,
    forceVP9: null,
    svc: null,
    datachannel: null,
    externalVideo: null
};

const roomClient = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ROOM_CLIENT':
            {
                const { roomId, peerId, displayName, device, handlerName, useSimulcast, useSharingSimulcast, forceTcp, produce, consume, forceH264, forceVP9, svc, datachannel, externalVideo }
                    = action.payload;

                return { ...state, id: roomId, peerId, displayName, device, handlerName, useSimulcast, useSharingSimulcast, forceTcp, produce, consume, forceH264, forceVP9, svc, datachannel, externalVideo }
            }
        default:
            return state;
    }
};

export default roomClient;