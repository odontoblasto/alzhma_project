class Node:
  def__init__(self,name):
    self.name = name
class Node_image:
  def__init__(self,photo = None, description = None):
    self.photo = photo
    self.description = description

class Customer_Base:
pass
class User:
def __init__(self, name = None):
  self.name = name
  def getName(self,name):
    print("Nome Cadastrado", self.name)
    return  str(self.name)
  def setName(self,name):
    self.name = name
    return str(self.name)
class Upload:
def __init__(self,photo = None,properties = None):
  self.photo = photo
  self.properties = properperties
