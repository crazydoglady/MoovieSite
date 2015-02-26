//testing movie model

describe("Movie Model", function () {
  beforeEach(function() {
    this.movieModel = new MovieModel();
    this.movieStub = sinon.stub(this.movieModel, 'save');
  });
  it("should be an instance of MovieModel Class", function () {
    expect(this.movieModel).is.instanceof(MovieModel);
  });
  it("should have correct urlRoot", function () {
    expect(this.movieModel.urlRoot).to.be.ok;
    expect(this.movieModel.urlRoot).to.be.equal("http://tiy-fee-rest.herokuapp.com/collections/mooviesite1");
  });
  it("should be able to add property to model", function () {
    expect(this.movieModel.attributes.title).to.not.be.ok;
    this.movieModel.set({title: "Princess Bride"});
    expect(this.movieModel.attributes.title).to.equal("Princess Bride");
  });
  it("should save my model when i call save", function () {
    this.movieModel.set({title: "Robots are people, too."});
    this.movieModel.save();

    expect(this.movieStub).to.have.been.calledOnce;
    this.movieModel.set({date: '1999'});
    this.movieModel.save();
    expect(this.movieStub).to.have.been.calledTwice;
  })

  it("should have a default photo", function () {
    expect(this.movieModel.attributes.photo).to.equal("http://www.fillmurray.com/250/350")
  })

});
