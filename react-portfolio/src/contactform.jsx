export default function  () {
    return(
    <>
    <h1>Contact detail</h1>
    <div className="contactform">
    <form>
  <div className="mb-3">
  <label for="exampleName" className="form-label">Name</label>
    <input type="Name" className="form-control" id="exampleInputName"/>
    
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1"/>
    <label for="exampleInputMessage" class="form-label">Message</label>
    <input type="massage" class="form-control" id="exampleInputmessage"/>
    
    
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
    </>);
}
