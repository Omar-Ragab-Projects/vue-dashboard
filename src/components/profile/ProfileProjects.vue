<template>
  <h4>Projects</h4>
  <p>Architects design houses</p>
  <div class="projects">
    <div class="project">
      <img src="./../../imgs/houses/house01.jpg" />
      <div class="project-id">Project #2</div>
      <div class="project-name">Modern</div>
      <div class="project-content">
        As Uber works through a huge amount of internal management turmoil.
      </div>
      <div class="view">
        <button>VIEW PROJECT</button>
      </div>
    </div>
    <div class="project">
      <img src="./../../imgs/houses/house02.jpg" />
      <div class="project-id">Project #1</div>
      <div class="project-name">Scandinavian</div>
      <div class="project-content">
        Different people have different taste, and various types of livingroom.
      </div>
      <div class="view">
        <button>VIEW PROJECT</button>
      </div>
    </div>
    <div class="project">
      <img src="./../../imgs/houses/house03.jpg" />
      <div class="project-id">Project #3</div>
      <div class="project-name">Minimalist</div>
      <div class="project-content">
        Why would anyone pick blue over pink? Pink is obviously a better color.
      </div>
      <div class="view">
        <button>VIEW PROJECT</button>
      </div>
    </div>
    <div class="project">
      <img src="./../../imgs/houses/house04.jpg" />
      <div class="project-id">Project #4</div>
      <div class="project-name">Gothic</div>
      <div class="project-content">
        livingroom something that every person has his or her own specific
        opinion about.
      </div>
      <div class="view">
        <button>VIEW PROJECT</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h4 {
  font-size: 18px;
  font-weight: bold;
  color: var(--text-main-color);
  margin-top: 50px;
}
p {
  color: var(--paragraph-color);
}
.projects {
  display: flex;
  gap: 70px;
  flex-wrap: wrap;
  .project {
    flex: 1;
    min-width: 170px;
    img {
      width: 100%;
      border-radius: 20px;
      margin: 10px 0;
      box-shadow: 0 5px 10px rgb(136, 136, 136);
    }
    .project-id {
      font-size: 15px;
    }
    .project-name {
      font-weight: bold;
      color: var(--text-main-color);
      font-size: 20px;
    }
    .project-content {
      color: var(--paragraph-color);
      font-size: 16px;
    }
    .view {
      margin-top: 20px;
      display: flex;
      align-items: center;
      gap: 20px;
      @media (max-width: 1432px) {
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
      }
      button {
        background-color: transparent;
        color: var(--green-color);
        border: 1px solid;
        font-weight: bold;
        border-radius: 10px;
        padding: 10px 15px;
        font-size: 14px;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
