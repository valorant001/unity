import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // base: 'http://vellaration.com/unityBank',
  plugins: [react()],
  resolve:{ 
    alias:[{find:"@",replacement:"/src"}]
  },
})
