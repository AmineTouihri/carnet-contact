hydrateContacts = () => {
    const data = localStorage.getItem("contacts");
    if (!data) return;
    try {
      contacts = JSON.parse(data);
    } catch (error) {
      console.error(error);
    }
  };