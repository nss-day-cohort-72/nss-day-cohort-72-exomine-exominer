const render = () => {
    
    const governorsHTML = "";
    let html = `
        <header class="header m-4 text-center">
            <h1 class="title">Solar System Mining Marketplace</h1>
        </header>
        <div id="main-container" class="container-fluid">
            <div  class="row">
                <div class="col-md-6">
                    <div id="governor-choices" class="mb-">
                        <!--GOVERNOR HTML-->
                        <p class="mt-4 "> this is where governor selection will be</p>
                    </div>
                    <div id="facility-choices" class="">
                        <!--FACILITY INPUT HTML-->
                        <p class="mt-5"> this is where facility selection will be</p>
                    </div> 
                
                </div>
            
                
                    <div id="planet-minerals" class=" col-md-4 p-4 mb-4 container-fluid">
                        <!--planet minerals html-->
                        <h2>Planer Minerals</h2>
                        <ul class="">
                            <li>list item</li>
                            <li>list item</li>
                            <li>list item</li>
                            <li>list item</li>
                            <li>list item</li>

                    </div>
                    <div class="row">
                        <div id="facility_minerals-container" class="col-md-8 border p-4">
                            <h2 class="text-center">Facility Minerals</h2>
                            <!--radio buttons-->
                        </div> 
                        <div id="shopping-cart" class="col-md-4 border p-4">
                            <h2 class="text-center">space cart<h2>
                            <!--show items in cart-->
                            <ul class="list-group mb-3">
                                <li class="list-group-item">item</li>
                                <li class="list-group-item">item</li>
                            </ul>
                            <!--submit button-->
                            <button class="btn btn-primary w-100">submit</button>
                        </div>   
                    </div>
                </div>
            </div>
        </div>`
        const DOMtarget = document.querySelector("#main-render");
        DOMtarget.innerHTML = html;
        
}
render();