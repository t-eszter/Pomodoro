class Settings extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
   <!-- Settings -->
         <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Settings</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div class="offcanvas-body">
			  <div id="f-length">
				<label for="focus-length">Focus Length</label>
				<input id="focus-length" class="length" type="number" value="25" min="0" max="1000" step="1"/>
			  </div>

				<div id="r-length">
				<label for="relax-length">Relax Length</label>
				<input id="relax-length" class="length" type="number" value="5" min="0" max="1000" step="1"/>
			  </div>
			  
			  
			  <div id="f-settings">
			  <label>Focus Settings</label>
			  <div class="switchToggle">
				  <span>Play alarm when done</span>
				<input type="checkbox" id="switch">
				<label for="switch">Toggle</label>
			</div>
			<label>Relax Settings</label>
			  <div class="switchToggle">
				  <span>Show ‘Positive News’</span>
				<input type="checkbox" id="switch2">
				<label for="switch2">Positive News</label>
			</div>
			<div class="switchToggle">
				  <span>Show ‘Recommended Book’</span>
				<input type="checkbox" id="switch3">
				<label for="switch3">Recommended Book</label>
			</div>
			<div class="switchToggle">
				  <span>Show ‘Well-being tip’</span>
				<input type="checkbox" id="switch4">
				<label for="switch4">Wellbeing Tip</label>
			</div>
			  </div>
			  
			  <div class="inner save-btn"><button class="btn start" id="saveButton" type="button" data-bs-dismiss="offcanvas">SAVE</button></div>
          </div>
			
      </div>
    `;
    }
}

customElements.define('settings-component', Settings);