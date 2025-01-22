export function shadeColor(hex: string, shadeOpacity: number=1): string {
    // Ensure the hex starts with "#" and is 6 characters
    hex = hex.startsWith("#") ? hex.slice(1) : hex;
    if (hex.length === 3) {
      hex = hex.split("").map(char => char + char).join(""); // Convert shorthand (e.g., "abc") to full form
    }
    if (hex.length !== 6) {
      throw new Error("Invalid hex color format. Expected #RRGGBB or #RGB.");
    }
  
    // Convert hex to RGB
    const r: number = parseInt(hex.slice(0, 2), 16);
    const g: number = parseInt(hex.slice(2, 4), 16);
    const b: number = parseInt(hex.slice(4, 6), 16);
  
    // Apply shading (towards black)
    const newR: number = Math.round(r * (1 - shadeOpacity));
    const newG: number = Math.round(g * (1 - shadeOpacity));
    const newB: number = Math.round(b * (1 - shadeOpacity));
  
    // Convert back to hex
    const toHex = (value: number): string => value.toString(16).padStart(2, "0");

    if(shadeOpacity===1){
      return hex;
    }
    return `#${toHex(newR)}${toHex(newG)}${toHex(newB)}`;
  }
  

  export function applyOpacityToHex(hex: string, opacity: number): string {
    // Ensure the hex starts with "#" and is in the correct format
    hex = hex.startsWith("#") ? hex.slice(1) : hex;
    if (hex.length === 3) {
      hex = hex.split("").map(char => char + char).join(""); // Convert shorthand (e.g., "abc") to full form
    }
    if (hex.length !== 6) {
      throw new Error("Invalid hex color format. Expected #RRGGBB or #RGB.");
    }
  
    // Clamp opacity between 0 and 1
    if (opacity < 0 || opacity > 1) {
      throw new Error("Opacity must be a value between 0 and 1.");
    }
  
    // Calculate the alpha value (0 to 255)
    const alpha = Math.round(opacity * 255);
  
    // Convert alpha to hex
    const alphaHex = alpha.toString(16).padStart(2, "0").toUpperCase();
  
    // Return the color with alpha
    return `#${hex}${alphaHex}`;
  }

  
  export function opacityShadeColor({hex,opacity=1,shade=1}:{hex: string, shade?:number, opacity?: number}){
    const shadedColor = shadeColor(hex, shade)
    const opacityColor = applyOpacityToHex(shadedColor, opacity)

    return opacityColor
  }

  export function getContrastingColor(hex: string): string {
    // Ensure the hex starts with "#" and is in the correct format

    hex = hex.startsWith("#") ? hex.slice(1) : hex;
    if (hex.length === 3) {
      hex = hex.split("").map(char => char + char).join(""); // Convert shorthand (e.g., "abc") to full form
    }
    if (hex.length !== 6) {
      throw new Error("Invalid hex color format. Expected #RRGGBB or #RGB.");
    }
  
    // Convert hex to RGB
    const r: number = parseInt(hex.slice(0, 2), 16);
    const g: number = parseInt(hex.slice(2, 4), 16);
    const b: number = parseInt(hex.slice(4, 6), 16);
  
    // Calculate the luminance (per WCAG standards)
    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  
    // Return white for dark colors and black for light colors
    return luminance > 0.5 ? "#000000" : "#FFFFFF";
  }
  