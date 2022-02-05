const vFooter = {
   data() {
      return {
         github: 'https://github.com/LittleBee1024/template_wasm_cpp'
      }
   },
   template: `
      <div class="vfooter">
         <a :href="github" target="_blank">
            <p id="link">GitHub</p>
         </a>
      </div>
   `
}

export default vFooter;
