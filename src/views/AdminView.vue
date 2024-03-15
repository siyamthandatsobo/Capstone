<template>

    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="userModalTarget">
            Add User
</button>

<!-- Modal -->
<div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="product-inputs container pt-5 styling">
      <h1 class="display-3 text-center">Users</h1>
    <label for="userName">User Name</label>
    <input type="text" id="userName" v-model="userPayload.firstName" required>

    <label for="userLastName">User Last Name</label>
    <input type="text" id="userLastName" v-model="userPayload.lastName" required>

    <label for="userAge">User Age</label>
    <input type="number" id="userAge" v-model="userPayload.userAge" required>

    <label for="userGender">Gender</label>
    <input type="text" id="userGender" v-model="userPayload.gender" required>

    <label for="userRole">Role</label>
    <input type="text" id="userRole" v-model="userPayload.userRole" required>
    
    <label for="userEmail">Email</label>
    <input type="text" id="userEmail" v-model="userPayload.emailAdd" required>
    
    <label for="userPassword">Password</label>
    <input type="text" id="userPassword" v-model="userPayload.userPass" required>
    
    <button class="btn btn-success" @click.prevent="addUser">Add New User</button>
    <br><br>
    <button class="btn btn-success" @click="updateUser">Update User</button>
    
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        <!-- Button trigger modal -->
    
<!-- Modal -->
<div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container styling">
    <h1 class="display-3 text-center">Products</h1>
    <div class="product-inputs">
        <label for="prodName">Product Name</label>
        <input type="text" id="prodName" v-model="payload.prodName" required>
        
        <label for="quantity">Product Quantity</label>
        <input type="number" id="quantity" v-model="payload.quantity" required>
        
        <label for="amount">Amount</label>
        <input type="number" id="amount" v-model="payload.amount" required>
        
      <label for="Category">Category</label>
      <input type="text" id="Category" v-model="payload.Category" required>
      
      <label for="prodUrl">Image URL</label>
      <input type="text" id="prodUrl" v-model="payload.prodUrl" required>
    </div>
    <button class="btn btn-success" @click.prevent="addProduct">Add Product</button>
    <br>
    <br>
    <button class="btn btn-success" @click="updateProduct">Update Product</button>
    
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

        
       



<div class="container">
    <div class="table-container pt-5">
        <table class="table table-light table-striped">
            <thead>
                <tr>
                    <th scope="col">User ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">User Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Email Address</th>
                    <th scope="col">User Role</th>
                    <th scope="col">#</th>
                    <th scope="col">#</th>
                </tr>
            </thead>
            <tbody v-for="user in users" :key="user.userID">
                <tr>
              <td>{{ user.userID }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.userAge }}</td>
              <td>{{ user.gender }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>{{ user.userRole }}</td>
              <td>
                <img
                  src="https://i.ibb.co/94g6875/bin.png"
                  alt="Delete"
                  @click.prevent="deleteUser(user.userID)"
                  width="30"
                  height="30"
                />
              </td>
              <td>
    <img
        src="https://i.ibb.co/JxK7ptg/product-design.png"
        alt="Edit"
        width="30"
        height="30"
        @click="editUser(user)"
        data-bs-toggle="modal"
        :data-bs-target="userModalTarget"
    />
</td>
            </tr>
        </tbody>
        </table>
        
    </div>
</div>



<button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="productModalTarget">
            Add Product
</button>

<div class="container pt-5">
    <div class="table-container ">
        <table class="table table-light table-striped">
            <thead>
                <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Quantity</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Image</th>
            <th scope="col">#</th>
            <th scope="col">#</th>
        </tr>
    </thead>
    <tbody v-for="item in products" :key="item.prodID">
        <tr>
            <!-- <th scope="row"></th> -->
            <td>{{ item.prodID }}</td>
            <td>{{ item.prodName }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.amount }}</td>
            <td>{{ item.Category }}</td>
            <td>
                <img
                :src="item.prodUrl"
                width="100px"
                height="100px"
                loading="lazy"
                />
            </td>
            <td>
                <img
                src="https://i.ibb.co/94g6875/bin.png"
                alt="Delete"
                @click.prevent="deleteproduct(item.prodID)"
                width="30"
                height="30"
                />
            </td>
            <td>
                <img
                src="https://i.ibb.co/JxK7ptg/product-design.png"
                alt="Edit"
                @click="editProduct(item)"
                
                width="30"
                height="30"
                data-bs-toggle="modal"
        :data-bs-target="productModalTarget"
                />
            </td>
          </tr>
        </tbody>
    </table>
</div>
</div>
</div>
</template>




<script>
export default {

    data() {
        return {
            payload: {
                prodName: null,
                quantity: null,
                amount: null,
                Category: null,
      prodUrl: null,
    },
    userPayload: {
      firstName: null,
      lastName: null,
      userAge: null,
      gender: null,
      emailAdd: null,
      userRole: null,
      userPass: null,
    },
    selectedUser: null,
    selectedProduct: null,
    userModalTarget: '#userModal',
    productModalTarget: '#productModal'


  };
},
  methods: {
    deleteproduct(prodID) {
      this.$store.dispatch("deleteProduct", prodID);
    },
    editProducts(prodID) {
      let edit = {
        prodID: prodID,
        prodName: this.payload.prodName,
        quantity: this.payload.quantity,
        amount: this.payload.amount,
        category: this.payload.Category,
        prodUrl: this.payload.prodUrl,
      };
      this.$store.dispatch("updateProduct", edit);
    },
    editUser(user) {
    this.selectedUser = { ...user };
    
    this.userPayload = { ...this.selectedUser };
    this.userModalTarget = '#userModal'; // Set the target for the user modal

  },

  updateUser() {
    if (this.selectedUser) {
      const updatedUser = {
        id: this.selectedUser.userID,
        data: { ...this.userPayload },
      };
      this.$store.dispatch("updateUser", updatedUser);

      this.selectedUser = null;
      this.userPayload = {
        firstName: null,
  lastName: null,
  userAge: null,
  gender: null,
  emailAdd: null,
  userRole: null,
  userPass: null
      };
      this.userModalTarget = ''; // Close the user modal

    }
  },
  editProduct(item) {
      this.selectedProduct = { ...item };

      this.payload = { ...this.selectedProduct };
      this.productModalTarget = '#productModal'; // Set the target for the product modal

    },
    async updateProduct() {
  if (this.selectedProduct) {
    const updatedProduct = {
      id: this.selectedProduct.prodID,
      data: { ...this.payload },
    };
    this.$store.dispatch("updateProduct", updatedProduct);

    this.selectedProduct = null;
    this.payload = {
      prodID: null,
      prodName: null,
      quantity: null,
      amount: null,
      Category: null,
      prodUrl: null,
    };
    this.productModalTarget = ''; // Close the product modal

  }
},

    addProduct() {
      console.log("Product URL:", this.payload.prodUrl);
      this.productModalTarget = '#productModal'; // Set the target for the product modal

      this.$store.dispatch("addProduct", this.payload);
    },
    addUser() {
  this.$store.dispatch("addUser", this.userPayload);
},

    deleteUser(userID) {
      this.$store.dispatch("deleteUser", userID);
    },
  }, 

  

  computed: {
    users() {
      return this.$store.state.users;
    },
    products() {
       return this.$store.state.Products;
    },
  },
  mounted() {
     this.$store.dispatch("fetchUsers");
    this.$store.dispatch("getProducts");
  },
};


</script>
<style scoped>
.styling{
    border: 2px solid black;
    background:#212529;
    color:white;
}
.product-inputs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.product-inputs label {
  flex: 0 0 calc(30% - 10px);
  max-width: calc(30% - 10px);
  font-weight: bold;
}

.product-inputs input {
  flex: 0 0 calc(70% - 10px);
  max-width: calc(70% - 10px);
  padding: 8px;
  box-sizing: border-box;
  margin-bottom: 10px;
}


@media (max-width: 600px) {
  .product-inputs label,
  .product-inputs input {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media (max-width: 600px) {
  .table-container {
    overflow-x: scroll;
  }
}
</style>
