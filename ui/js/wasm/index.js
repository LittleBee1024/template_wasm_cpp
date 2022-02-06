const vWasm = {
   data() {
      return {
         input: '',
         output: ''
      }
   },
   methods: {
      toUppercase() {
         this.output = UTF8ToString(Module._ToUppercase(allocateUTF8OnStack(this.input)))
      },
      clear() {
         this.input = ''
         this.output = ''
      }
   },
   template: `
      <div>
         <el-row :gutter="20">
            <el-col class="grid-content bg-purple" :span="12">
               <el-input
                  v-model="input"
                  :rows="18"
                  type="textarea"
                  placeholder="Please input"
               />
               <el-button @click="toUppercase">To Uppercase</el-button>
               <el-button @click="clear">Clear</el-button>
            </el-col>
            <el-col class="grid-content bg-purple-dark" :span="12">
               <el-input
                  v-model="output"
                  :rows="18"
                  type="textarea"
                  placeholder=""
               />
            </el-col>
         </el-row>
      </div>
   `
}

export default vWasm;
