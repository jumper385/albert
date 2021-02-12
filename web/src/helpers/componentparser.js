export const type2Code = code => {
    let typeCode = null;
    switch (`${code}`.toLowerCase()) {
        case 'resistor':
            typeCode = 'res';
            break;
        
        case 'capacitor':
            typeCode = 'cap';
            break

        case 'transistor':
            typeCode = 'tran';
            break

        case 'connector':
            typeCode = 'conn';
            break

        case 'diode':
            typeCode = 'd';
            break

        default:
            typeCode = code;
            break;
    }
    return typeCode
}