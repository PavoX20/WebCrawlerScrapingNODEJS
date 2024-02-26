module.exports = {
    // Asegúrate de que testRegex también incluya .mjs. La expresión regular se ajusta para esto.
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?|mjs)$",
    
    // Mantén la configuración de testPathIgnorePatterns sin cambios.
    testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
    
    // Asegúrate de incluir 'mjs' en moduleFileExtensions si aún no está incluido.
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "mjs"],
    
    // (Opcional) Agrega configuración adicional para soporte de módulos ES, si es necesario.
    // Esto puede incluir transformaciones específicas para manejar la sintaxis de módulos ES.
    transform: {}
}
