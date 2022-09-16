export const components = {
  h1: (props) => (
    <h1 className="my-2 text-3xl font-bold" {...props} />
  ),
  h2: (props) => (
    <h1 className="my-2 text-2xl font-bold" {...props} />
  ),
  h3: (props) => (
    <h1 className="my-2 text-xl font-bold" {...props} />
  ),
  img: (props) => (
    <img 
      className="w-full rounded-lg shadow-lg object-cover object-center"
      {...props} 
    />  
  ),
  /*pre: (props) => (
    <div className="p-2 bg-gray-50 border-2 border-gray-200 rounded-md">
      <pre {...props} />
    </div>
  )*/
};