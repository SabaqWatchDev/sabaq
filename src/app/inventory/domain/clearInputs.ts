"use client"

export default function clearInputs() {
  const newAmount = document.querySelector<HTMLInputElement>('#new-amount');
  const newItem = document.querySelector<HTMLInputElement>('#new-item');
  const deliveredAt = document.querySelector<HTMLInputElement>('#new-deliveredAt');
  const deliveredTo = document.querySelector<HTMLInputElement>('#new-deliveredTo');
  const receivedAt = document.querySelector<HTMLInputElement>('#new-receivedAt');
  const receivedStatus = document.querySelector<HTMLInputElement>('#new-receivedStatus');

  const inputElements: (HTMLInputElement | null)[] = [
    newAmount,
    newItem,
    deliveredAt,
    deliveredTo,
    receivedAt,
    receivedStatus
  ];

  function inputsClearer(input: HTMLInputElement | null) {
    if (input) {
      input.value = "";
    }
  }

  for (let i = 0; i < inputElements.length; i++) {
    if (inputElements[i]) {
      let input = inputElements[i];

      if (input?.id.includes("deliveredAt")) {
        console.log("Saved", input.id)
      } else {
        inputsClearer(input)
      }
    }
  }

  localStorage.clear();
  localStorage.setItem("ally-supports-cache", '{"userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36","version":"1.4.1","focusAreaImgTabindex":false,"focusAreaTabindex":false,"focusAreaWithoutHref":false,"focusAudioWithoutControls":false,"focusBrokenImageMap":true,"focusChildrenOfFocusableFlexbox":false,"focusFieldsetDisabled":true,"focusFieldset":false,"focusFlexboxContainer":false,"focusFormDisabled":true,"focusImgIsmap":false,"focusImgUsemapTabindex":true,"focusInHiddenIframe":true,"focusInvalidTabindex":false,"focusLabelTabindex":true,"focusObjectSvg":true,"focusObjectSvgHidden":false,"focusRedirectImgUsemap":false,"focusRedirectLegend":"","focusScrollBody":false,"focusScrollContainerWithoutOverflow":false,"focusScrollContainer":false,"focusSummary":true,"focusSvgFocusableAttribute":false,"focusSvgTabindexAttribute":true,"focusSvgNegativeTabindexAttribute":true,"focusSvgUseTabindex":true,"focusSvgForeignobjectTabindex":true,"focusSvg":false,"focusTabindexTrailingCharacters":true,"focusTable":false,"focusVideoWithoutControls":false,"cssShadowPiercingDeepCombinator":"","focusInZeroDimensionObject":true,"focusObjectSwf":true,"focusSvgInIframe":false,"tabsequenceAreaAtImgPosition":false,"time":"2023-12-01T20:27:11.561Z"}')
}
