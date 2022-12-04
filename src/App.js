import { useState } from 'react';
import './App.css';

function App() {
  const [isFocused, setIsFocused] = useState(false);

  const handleContactBtnClick = ()=>{
    isFocused ? setIsFocused(false) : setIsFocused(true);
  }
  return (
    <div className="App">
      <h1>This is an example page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eligendi voluptates quasi tenetur ut error explicabo atque similique, nihil fugiat aliquid maxime autem dignissimos eveniet deleniti quos placeat consequatur voluptatibus molestias. Omnis deleniti, dolore consequuntur veniam debitis perspiciatis voluptatem. Itaque saepe eos unde quod a neque dolores quae, odit nulla eum atque temporibus delectus maxime recusandae blanditiis exercitationem voluptate quasi molestias ducimus sint dolorem magni. Soluta sapiente voluptatem adipisci minima cumque, saepe beatae. Quia sit exercitationem dolor ut illum sapiente eaque rem accusantium eum reiciendis labore tempore ea nulla mollitia expedita esse officiis, numquam eligendi! Alias, doloremque sapiente delectus quia accusamus ipsam cumque illum ullam non in beatae, repudiandae vero soluta animi veniam mollitia repellat id. Incidunt nostrum, minus atque dolor iure vero dolorum labore quo iusto aliquam expedita animi voluptate a debitis! Dolor dolorem cupiditate, ipsum illum quis deserunt necessitatibus, ea optio totam officiis dicta dolores, praesentium recusandae neque ab? Nesciunt porro tempore consectetur dignissimos, harum dicta, ullam natus iusto impedit magnam aspernatur cupiditate dolor earum nihil culpa pariatur autem vero itaque quod quis! Assumenda, similique. Nesciunt suscipit quis adipisci, maiores similique illum numquam libero debitis dolorum deleniti aperiam veniam magni illo voluptate fuga rerum nam, id unde quas itaque nemo praesentium ipsa, facilis laborum. Fugit vel odio dicta id porro voluptates eligendi laudantium accusamus dolorum, voluptas recusandae ab quo illo incidunt quisquam facilis, molestiae tempora velit corrupti et commodi voluptate alias consequuntur itaque! Magnam quisquam aliquid sit quod velit dolorem id iste culpa asperiores. Quas illo odio quasi vitae, laboriosam, ipsum quod cum ullam mollitia expedita sit. Dignissimos temporibus nihil, expedita cum ex voluptatum enim reiciendis ratione vero dolorum quasi iusto assumenda nisi, unde sint aliquam tempore consequatur, tempora praesentium impedit omnis nostrum laborum deserunt animi! Hic at quibusdam libero corrupti vel voluptatem aliquid quia. Aperiam omnis consequatur distinctio, a, pariatur possimus excepturi eius deserunt inventore mollitia tempora molestias. Molestiae nulla temporibus explicabo eligendi, vitae nihil laudantium in quia doloribus asperiores molestias adipisci maiores nisi sed, deleniti rem sint perspiciatis aspernatur labore eum dignissimos cupiditate distinctio atque. Optio earum unde molestiae error quam, corrupti soluta accusamus rerum hic vero repellat eaque, necessitatibus reiciendis. Animi dolorum quia, maiores quaerat dolorem nisi rerum delectus veritatis recusandae ad facilis omnis hic at molestias consequuntur similique perferendis aspernatur. Veritatis maxime repellendus repudiandae qui voluptate esse eos accusantium laborum numquam eum sed rerum perspiciatis, mollitia, vitae delectus sint suscipit recusandae voluptates? Harum aliquid sunt dolor, ad temporibus minus inventore reiciendis atque enim necessitatibus ab asperiores facere itaque cum in delectus blanditiis! Illum facilis adipisci consequuntur dignissimos mollitia neque esse quae ab rem vel nemo dolorem labore minima eveniet illo ratione iste ducimus, facere vero, debitis, placeat repudiandae! Ullam in nobis nam quos rem fuga quas nesciunt soluta possimus aliquam adipisci dolor, pariatur magni quidem? Rem accusamus sed maiores adipisci fugit modi sequi voluptas, beatae quaerat nemo labore corporis facere quisquam, ad libero provident itaque! Dignissimos nihil quidem repellendus voluptatem, ratione, eveniet, assumenda ab earum itaque quae pariatur repellat ducimus labore nam vel tempora!</p>
      <div className={isFocused ? 'input-window' : 'msg-box'} >
      {isFocused?
        (<>
        <div className='cut-icon' onClick={()=>{setIsFocused(false)}}>X</div>
        <div>
          <form className='contact-form'>
            <legend className='form-ledgend'>Enter your message</legend>
              <input type="text" placeholder='Your Name' className='input-fields' />
              <input type="email" placeholder='Your Email' className='input-fields' />
              <textarea cols="30" rows="10" placeholder='Your Message' className='input-fields'></textarea>
              <button className='submit-btn'>Send</button>
          </form>
        </div>
        </>)
        :
          (<div onClick={handleContactBtnClick}>
          Call
        </div>)
      }
      </div>
    </div>
  );
}

export default App;
