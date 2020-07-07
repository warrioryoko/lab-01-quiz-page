function translateToAYes(text) {
  text = text.trim().toLowerCase().charAt(0);
  if (text === 'y') {
    return true;
  } else {
    return false;
  }
}

export {translateToAYes};