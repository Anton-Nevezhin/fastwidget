let fast_config =  {
    elements : [
      {
        name : 'Записаться к врачу',
        modal : '#zapis',
        icon : '<svg style = "margin: 0 5px 0 0" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M7 3V5M17 3V5M3 9H21M13.5 13.0001L7 13M10 17.0001L7 17M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z" stroke="#1C274C" stroke-width="1.104" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>',
      },
      {
        name : 'Задать вопрос',
        modal : '#question',
        icon : '<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 10.5H16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M8 14H13.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path></g></svg> ',
      },
      {
        name : 'Заказать звонок',
        modal : '#call',
        icon : '<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13.2596 1.88032C13.3258 1.47143 13.7124 1.19406 14.1212 1.26025C14.1466 1.2651 14.228 1.28032 14.2707 1.28982C14.356 1.30882 14.475 1.33808 14.6234 1.38131C14.9202 1.46775 15.3348 1.61015 15.8324 1.83829C16.8287 2.29505 18.1545 3.09405 19.5303 4.46985C20.9061 5.84565 21.7051 7.17146 22.1619 8.16774C22.39 8.66536 22.5324 9.07996 22.6188 9.37674C22.6621 9.52515 22.6913 9.64417 22.7103 9.7295C22.7198 9.77217 22.7268 9.80643 22.7316 9.83174L22.7374 9.86294C22.8036 10.2718 22.5287 10.6743 22.1198 10.7405C21.7121 10.8065 21.328 10.5305 21.2602 10.1235C21.2581 10.1126 21.2524 10.0833 21.2462 10.0556C21.2339 10.0002 21.2125 9.91236 21.1787 9.79621C21.111 9.56388 20.9935 9.21854 20.7983 8.79287C20.4085 7.94256 19.7075 6.76837 18.4696 5.53051C17.2318 4.29265 16.0576 3.59165 15.2073 3.20182C14.7816 3.00667 14.4363 2.88913 14.2039 2.82146C14.0878 2.78763 13.9418 2.75412 13.8864 2.74178C13.4794 2.67396 13.1936 2.28804 13.2596 1.88032Z" fill="#1C274C"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4859 5.32978C13.5997 4.93151 14.0148 4.70089 14.413 4.81468L14.207 5.53583C14.413 4.81468 14.413 4.81468 14.413 4.81468L14.4145 4.8151L14.416 4.81554L14.4194 4.81651L14.4271 4.81883L14.4469 4.82499C14.462 4.82981 14.4808 4.83609 14.5033 4.84406C14.5482 4.85999 14.6075 4.88266 14.6803 4.91386C14.826 4.9763 15.0251 5.07272 15.2696 5.21743C15.7591 5.50711 16.4272 5.98829 17.2122 6.77326C17.9972 7.55823 18.4784 8.22642 18.768 8.71589C18.9128 8.9604 19.0092 9.15946 19.0716 9.30515C19.1028 9.37795 19.1255 9.43731 19.1414 9.48222C19.1494 9.50467 19.1557 9.5235 19.1605 9.53858L19.1666 9.55837L19.169 9.56612L19.1699 9.56945L19.1704 9.57098C19.1704 9.57098 19.1708 9.57243 18.4496 9.77847L19.1708 9.57242C19.2846 9.9707 19.054 10.3858 18.6557 10.4996C18.2608 10.6124 17.8493 10.3867 17.7315 9.99462L17.7278 9.98384C17.7224 9.96881 17.7114 9.93923 17.6929 9.89602C17.6559 9.80969 17.5888 9.66846 17.4772 9.47987C17.2542 9.10312 16.8515 8.53388 16.1516 7.83392C15.4516 7.13397 14.8823 6.73126 14.5056 6.5083C14.317 6.39668 14.1758 6.32958 14.0894 6.29258C14.0462 6.27407 14.0167 6.26303 14.0016 6.2577L13.9909 6.254C13.5988 6.13613 13.373 5.72468 13.4859 5.32978Z" fill="#1C274C"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.00745 4.40708C6.68752 2.72701 9.52266 2.85473 10.6925 4.95085L11.3415 6.11378C12.1054 7.4826 11.7799 9.20968 10.6616 10.3417C10.6467 10.3621 10.5677 10.477 10.5579 10.6778C10.5454 10.9341 10.6364 11.5269 11.5548 12.4453C12.4729 13.3635 13.0656 13.4547 13.3221 13.4422C13.5231 13.4325 13.6381 13.3535 13.6585 13.3386C14.7905 12.2203 16.5176 11.8947 17.8864 12.6587L19.0493 13.3077C21.1454 14.4775 21.2731 17.3126 19.5931 18.9927C18.6944 19.8914 17.4995 20.6899 16.0953 20.7431C14.0144 20.822 10.5591 20.2846 7.13735 16.8628C3.71556 13.441 3.17818 9.98579 3.25706 7.90486C3.3103 6.50066 4.10879 5.30574 5.00745 4.40708ZM9.38265 5.68185C8.78363 4.60851 7.17394 4.36191 6.06811 5.46774C5.29276 6.24309 4.7887 7.0989 4.75599 7.96168C4.6902 9.69702 5.11864 12.7228 8.19801 15.8021C11.2774 18.8815 14.3031 19.31 16.0385 19.2442C16.9013 19.2115 17.7571 18.7074 18.5324 17.932C19.6382 16.8262 19.3916 15.2165 18.3183 14.6175L17.1554 13.9685C16.432 13.5648 15.4158 13.7025 14.7025 14.4158C14.6325 14.4858 14.1864 14.902 13.395 14.9405C12.5847 14.9799 11.604 14.6158 10.4942 13.506C9.38395 12.3958 9.02003 11.4148 9.0597 10.6045C9.09846 9.81294 9.51468 9.36733 9.58432 9.29768C10.2976 8.58436 10.4354 7.56819 10.0317 6.84478L9.38265 5.68185Z" fill="#1C274C"></path> </g></svg>',
      },
      {
        name : 'Перейти в VK группу',
        url : 'https://vk.com/club125509840" target="_blank',
        icon : '<svg width="20px" height="20px" viewBox="32 32 960 960" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M179.928 32h664.144C925.767 32 992 98.23 992 179.929v664.143C992 925.768 925.767 992 844.072 992H179.928C98.23 992 32 925.768 32 844.071V179.929C32 98.23 98.23 32 179.928 32" fill="#4c75a3"></path><path d="M503.946 704.029h39.269s11.859-1.307 17.923-7.831c5.573-5.996 5.396-17.249 5.396-17.249s-.769-52.692 23.683-60.452c24.113-7.647 55.07 50.925 87.88 73.449 24.812 17.039 43.667 13.31 43.667 13.31l87.739-1.227s45.895-2.832 24.132-38.917c-1.782-2.947-12.679-26.693-65.238-75.48-55.02-51.062-47.644-42.801 18.626-131.128 40.358-53.79 56.49-86.628 51.449-100.691-4.803-13.399-34.489-9.86-34.489-9.86l-98.786.611s-7.328-.998-12.756 2.25c-5.31 3.177-8.717 10.599-8.717 10.599s-15.642 41.622-36.486 77.024c-43.988 74.693-61.58 78.647-68.771 74.002-16.729-10.811-12.549-43.422-12.549-66.596 0-72.389 10.98-102.57-21.381-110.384-10.737-2.591-18.646-4.305-46.11-4.585-35.25-.358-65.078.108-81.971 8.384-11.239 5.504-19.91 17.766-14.626 18.472 6.53.869 21.313 3.99 29.152 14.655 10.126 13.776 9.772 44.703 9.772 44.703s5.818 85.213-13.585 95.795c-13.314 7.26-31.582-7.561-70.8-75.327-20.091-34.712-35.265-73.085-35.265-73.085s-2.922-7.17-8.141-11.008c-6.33-4.65-15.175-6.124-15.175-6.124l-93.876.613s-14.09.394-19.267 6.521c-4.606 5.455-.368 16.725-.368 16.725s73.49 171.942 156.711 258.592c76.315 79.454 162.958 74.239 162.958 74.239" fill="#ffffff"></path></g></svg>',
      },
      {
        name : 'Мы в Одноклассниках',
        url : 'http://ok.ru/group/53650123325694',
        icon : '<svg xmlns="http://www.w3.org/2000/svg" aria-label="OK.ru" role="img" viewBox="0 0 512 512" width="20px" height="20px" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#EE8208"></rect><path d="M256 137a36.5 36.5 0 0136.5 36.5a36.5 36.5 0 01-36.5 36.5a36.5 36.5 0 01-36.5-36.5a36.5 36.5 0 0136.5-36.5zm0 124.5c48.6 0 88-39.5 88 -88s-39.5-88 -88 -88s-88 39.5-88 88s39.5 88 88 88m35.6 71.9a164.8 164.8 0 0051-21a25.8 25.8 0 008-35.6a25.8 25.8 0 00-35.6-8a111.9 111.9 0 01-118.6 0a25.8 25.8 0 00-35.6 8a25.8 25.8 0 008 35.6c15.9 10 33 17 51 21l-49 49.3a25.8 25.8 0 0036.5 36.5l48.4-48.5l48.4 48.4a25.8 25.8 0 0036.5 0a25.8 25.8 0 000-36.5l-49.3-49.3" fill="#ffffff"></path></g></svg>',
      },
      {
        name : 'Чат с акциями в Viber',
        url : 'https://invite.viber.com/?g2=AQAPB%2Fw%2B4%2FmQmkrsrorvs%2BN7N3eMKEOdNzFc%2Blhg%2FrQiWp61DgmZ2g4YQ5BdEm2m',
        icon : '<svg width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect height="512" rx="64" ry="64" width="512" fill="#7b519d"></rect> <g fill="#ffffff" fill-rule="evenodd"> <path d="M421.915 345.457c-12.198-9.82-25.233-18.634-38.064-27.638-25.59-17.973-48.996-19.37-68.091 9.546-10.723 16.234-25.734 16.945-41.43 9.823-43.27-19.62-76.683-49.85-96.255-93.83-8.658-19.458-8.544-36.903 11.713-50.665 10.725-7.278 21.53-15.89 20.666-31.793-1.128-20.736-51.475-90.033-71.357-97.347-8.227-3.027-16.42-2.83-24.79-.017-46.62 15.678-65.93 54.019-47.437 99.417 55.17 135.442 152.26 229.732 285.91 287.282 7.62 3.277 16.085 4.587 20.371 5.763 30.428.306 66.073-29.01 76.367-58.104 9.911-27.99-11.035-39.1-27.603-52.437zM272.06 77.439c97.707 15.025 142.768 61.485 155.21 159.895 1.154 9.09-2.232 22.768 10.737 23.02 13.554.259 10.288-13.217 10.402-22.316 1.146-92.684-79.669-178.606-173.524-181.774-7.081 1.019-21.733-4.883-22.647 10.988-.609 10.7 11.727 8.942 19.822 10.187z"></path> <path d="M291.172 104.422c-9.398-1.132-21.805-5.56-24.001 7.48-2.293 13.687 11.535 12.297 20.42 14.286 60.346 13.487 81.358 35.451 91.294 95.311 1.451 8.727-1.432 22.31 13.399 20.059 10.991-1.674 7.021-13.317 7.94-20.118.487-57.47-48.758-109.778-109.052-117.018z"></path> <path d="M296.713 151.416c-6.273.155-12.43.834-14.736 7.538-3.463 10.02 3.822 12.409 11.237 13.6 24.755 3.974 37.783 18.571 40.256 43.257.668 6.7 4.92 12.129 11.392 11.365 8.969-1.07 9.78-9.053 9.505-16.634.443-27.734-30.904-59.79-57.654-59.126z"></path> </g> </g></svg> ',
      },
      {
        name : 'Чат с акциями в WhatsApp',
        url : 'https://chat.whatsapp.com/IoMjyFsn1J05TspkOxH1q4" target="_blank',
        icon : '<svg width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <path id="a" d="M1023.941 765.153c0 5.606-.171 17.766-.508 27.159-.824 22.982-2.646 52.639-5.401 66.151-4.141 20.306-10.392 39.472-18.542 55.425-9.643 18.871-21.943 35.775-36.559 50.364-14.584 14.56-31.472 26.812-50.315 36.416-16.036 8.172-35.322 14.426-55.744 18.549-13.378 2.701-42.812 4.488-65.648 5.3-9.402.336-21.564.505-27.15.505l-504.226-.081c-5.607 0-17.765-.172-27.158-.509-22.983-.824-52.639-2.646-66.152-5.4-20.306-4.142-39.473-10.392-55.425-18.542-18.872-9.644-35.775-21.944-50.364-36.56-14.56-14.584-26.812-31.471-36.415-50.314-8.174-16.037-14.428-35.323-18.551-55.744-2.7-13.378-4.487-42.812-5.3-65.649-.334-9.401-.503-21.563-.503-27.148l.08-504.228c0-5.607.171-17.766.508-27.159.825-22.983 2.646-52.639 5.401-66.151 4.141-20.306 10.391-39.473 18.542-55.426C34.154 93.24 46.455 76.336 61.07 61.747c14.584-14.559 31.472-26.812 50.315-36.416 16.037-8.172 35.324-14.426 55.745-18.549 13.377-2.701 42.812-4.488 65.648-5.3 9.402-.335 21.565-.504 27.149-.504l504.227.081c5.608 0 17.766.171 27.159.508 22.983.825 52.638 2.646 66.152 5.401 20.305 4.141 39.472 10.391 55.425 18.542 18.871 9.643 35.774 21.944 50.363 36.559 14.559 14.584 26.812 31.471 36.415 50.315 8.174 16.037 14.428 35.323 18.551 55.744 2.7 13.378 4.486 42.812 5.3 65.649.335 9.402.504 21.564.504 27.15l-.082 504.226z"></path> </defs> <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="512.001" y1=".978" x2="512.001" y2="1025.023"> <stop offset="0" stop-color="#61fd7d"></stop> <stop offset="1" stop-color="#2bb826"></stop> </linearGradient> <use xlink:href="#a" overflow="visible" fill="url(#b)"></use> <g> <path fill="#FFF" d="M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z"></path> </g> </g></svg>',
      },
      {
        name : 'Задать вопрос в WhatsApp',
        url : 'https://wa.me/+79814536319?text=Здравствуйте!',
        icon : '<svg width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <path id="a" d="M1023.941 765.153c0 5.606-.171 17.766-.508 27.159-.824 22.982-2.646 52.639-5.401 66.151-4.141 20.306-10.392 39.472-18.542 55.425-9.643 18.871-21.943 35.775-36.559 50.364-14.584 14.56-31.472 26.812-50.315 36.416-16.036 8.172-35.322 14.426-55.744 18.549-13.378 2.701-42.812 4.488-65.648 5.3-9.402.336-21.564.505-27.15.505l-504.226-.081c-5.607 0-17.765-.172-27.158-.509-22.983-.824-52.639-2.646-66.152-5.4-20.306-4.142-39.473-10.392-55.425-18.542-18.872-9.644-35.775-21.944-50.364-36.56-14.56-14.584-26.812-31.471-36.415-50.314-8.174-16.037-14.428-35.323-18.551-55.744-2.7-13.378-4.487-42.812-5.3-65.649-.334-9.401-.503-21.563-.503-27.148l.08-504.228c0-5.607.171-17.766.508-27.159.825-22.983 2.646-52.639 5.401-66.151 4.141-20.306 10.391-39.473 18.542-55.426C34.154 93.24 46.455 76.336 61.07 61.747c14.584-14.559 31.472-26.812 50.315-36.416 16.037-8.172 35.324-14.426 55.745-18.549 13.377-2.701 42.812-4.488 65.648-5.3 9.402-.335 21.565-.504 27.149-.504l504.227.081c5.608 0 17.766.171 27.159.508 22.983.825 52.638 2.646 66.152 5.401 20.305 4.141 39.472 10.391 55.425 18.542 18.871 9.643 35.774 21.944 50.363 36.559 14.559 14.584 26.812 31.471 36.415 50.315 8.174 16.037 14.428 35.323 18.551 55.744 2.7 13.378 4.486 42.812 5.3 65.649.335 9.402.504 21.564.504 27.15l-.082 504.226z"></path> </defs> <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="512.001" y1=".978" x2="512.001" y2="1025.023"> <stop offset="0" stop-color="#61fd7d"></stop> <stop offset="1" stop-color="#2bb826"></stop> </linearGradient> <use xlink:href="#a" overflow="visible" fill="url(#b)"></use> <g> <path fill="#FFF" d="M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z"></path> </g> </g></svg>',
      }
    ],
    config : [
      {
        color: 'green',
        background : '#eeeeee',
        position: 'right'
      },
    ]
  };
   
  let newdiv = document.createElement('div');
  document.body.appendChild(newdiv)
  let newbtn = document.createElement('div');
  document.body.appendChild(newbtn)
  let newstyle = document.createElement('style');
  document.head.appendChild(newstyle)
  newstyle.innerHTML = '.fast-widget-mob-bottom-item {border-bottom: 1px solid #f3f3f3; padding: 0; font-size: 15px; display: flex; align-items: center;}'
  newstyle.innerHTML = newstyle.innerHTML + '.fast-widget-mob-bottom-item:last-child {border-bottom: 0px solid lightgrey;} .fast-widget-mob-bottom-item a, .fast-widget-mob-bottom-item a:hover {text-decoration:none; color:' + fast_config.config[0].color + ';}'
  newstyle.innerHTML = newstyle.innerHTML + '.fast-widget-mob-bottom-item a {padding: 8px; display: flex; flex-grow: 1; align-items: center;} .fast-widget-mob-bottom-item a:hover {cursor:pointer; background:' + fast_config.config[0].background + ';}'
  newstyle.innerHTML = newstyle.innerHTML + '.fast-widget-mob-bottom-item svg {margin: 0 5px 0 0;}'
  newstyle.innerHTML = newstyle.innerHTML + '.fast-widget-mob-bottom {position: fixed; bottom: 15px; z-index: 99; width: 60px; justify-content: center; padding: 5px 0; height: 60px; ' + fast_config.config[0].position + ': 15px; background: url(https://esteticmed39.ru/themes/simple-v1.0/images/in-touch.svg) no-repeat center center / 30px, #00ABAA; cursor: pointer; border-radius: 50%; box-shadow: 0 0 20px 0 rgb(0 0 0 / 30%);}'
  newstyle.innerHTML = newstyle.innerHTML + '.fast-widget-mob-bottom-open {position: fixed; overflow: hidden; z-index: 99; visibility: hidden; min-width: 300px;' + fast_config.config[0].position + ': 26px; bottom: 90px; background: white; padding: 10px; box-shadow: 0 2px 5px 0 rgb(0 0 0 / 30%); border-radius: 5px;}'
  newstyle.innerHTML = newstyle.innerHTML + '.fast-widget-close {background: url(https://esteticmed39.ru/themes/simple-v1.0/images/icon-close.svg) no-repeat center center / 20px, white;}'
  
  
   for (let item of fast_config.elements) { //проходимся по кнопкам и выводим их
     if(item.url==undefined) {
       newdiv.innerHTML = newdiv.innerHTML + '<div class="fast-widget-mob-bottom-item"><a href="' + window.location.href + item.modal + '" target="_blank">' + item.icon + item.name + '</a></div>'
     } else {
      newdiv.innerHTML = newdiv.innerHTML + '<div class="fast-widget-mob-bottom-item"><a href="' + item.url + '" target="_blank">' + item.icon + item.name + '</a></div>'
     }
  }
  
  newdiv.classList.add('fast-widget-mob-bottom-open');
  newbtn.classList.add('fast-widget-mob-bottom');
  newbtn.onclick = function() {
      if (getComputedStyle(newdiv).visibility === 'hidden') {
          newdiv.style.visibility = 'visible';
          newbtn.classList.add('fast-widget-close');
      } else {
          newdiv.style.visibility = 'hidden';
          newbtn.classList.remove('fast-widget-close')
      }
    }

console.log(a)
