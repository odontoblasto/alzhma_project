class Customer_Base:
pass
class User:
def __init__(self, name = None):
  self.name = name
  def getName(self,name):
    print("Nome Cadastrado", self.name)
    return self.name
  def setName(self,name):
    self.name = name
    return name
class Upload:
def __init__(self,photo = None,properties = None):
  self.photo = photo
  self.properties = properperties
