import { ColorRing } from  'react-loader-spinner'
import { useSelector } from 'react-redux'
import { getIsLoading } from 'redux/selectors'




export const Loader = ()=>{
    const isLoading = useSelector(getIsLoading)
return(
    <ColorRing
  visible={isLoading}
  height="120"
  width="120"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
)
}
