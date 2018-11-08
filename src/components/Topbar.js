import React, { Component } from "react";
import {
  Menu,
  Button,
  Dropdown,
  Modal,
  Image,
  Responsive,
  Divider
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import s1 from "../images/ja2.jpg";
import { Document } from "react-pdf";
import file1 from "../pdf/licencaizvodjenje.pdf";

export default class Topbar extends Component {
  // mouseEnter() {
  //   console.log("test");
  // }

  // mouseLeave() {
  //   console.log("testleave");
  // }

  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const dropStyle = {
      height: "30px",
      width: "380px",
      color: "black",
      margin: "5%"
    };

    const { activeItem } = this.state;

    return (
      <div>
        <Responsive minWidth={768}>
          <Menu
            icon
            style={{
              width: "100%",
              position: "fixed",
              top: "0",
              backgroundColor: "#181818",
              zIndex: 1,
              borderRadius: 0,
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "space-between",
              maxHeight: "20px"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start"
                // marginRight: "60%"
              }}
            >
              <Menu.Item
                as={Link}
                to="/"
                style={{ color: "white" }}
                onClick={this.handleItemClick}
              >
                MIŠKOVIĆ JELENA ARHITEKTA
              </Menu.Item>

              <Menu.Item
                name="account"
                active={activeItem === "facebook f"}
                onClick={this.handleItemClick}
                style={{ color: "white" }}
              >
                <Button
                  style={{ backgroundColor: "#181818", color: "#9d9d9d" }}
                  circular
                  icon="facebook f"
                  href="https://www.facebook.com/jelena.miskovic.50"
                  target="_blank"
                />
              </Menu.Item>

              <Menu.Item
                name="search"
                active={activeItem === "instagram"}
                onClick={this.handleItemClick}
                style={{ color: "#00cd57" }}
              >
                <Button
                  style={{ backgroundColor: "#181818", color: "#9d9d9d" }}
                  circular
                  icon="instagram"
                  href="https://www.instagram.com/ena_jel/"
                  target="_blank"
                />
              </Menu.Item>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Modal
                style={{ background: "rgba(30, 30, 30, 0.3)" }}
                dimmer={"blurring"}
                trigger={
                  <Button
                    style={{ backgroundColor: "#181818", color: "white" }}
                  >
                    O meni
                  </Button>
                }
              >
                <Modal.Header>O meni</Modal.Header>
                <Modal.Content
                  style={{
                    backgroundColor: "rgba(30, 30, 30, 0.3)"
                  }}
                >
                  <Image
                    circular
                    src={s1}
                    style={{
                      margin: "auto",
                      width: "15%"
                    }}
                  />
                  <Modal.Description>
                    <p
                      style={{
                        marginTop: "3%",
                        textAlign: "justify",
                        padding: "3%",
                        color: "white"
                      }}
                    >
                      Rodjena sam 1986. godine. Diplomirala sam na
                      Arhitektonskom fakultetu u Podgorici. Od 2010-te godine se
                      aktivno bavim tom profesijom. Prvobitno iskustvo sam
                      stekla kao dizajner enterijera u fabrici Mi- Rai. Potom
                      se, 2012-te godine, priključujem birou „ Atlas Invest“-a
                      kao projektant- saradnik na kapitalnim projektima Atlas
                      Grupe. U medjuvremenu, tim se razvio u kompaniju pod
                      nazivom „ID Construction“, uz koji sam stekla iskustvo i
                      sposobonst za vodjenje projekata. I dalje sam dio tog
                      tima. Najveće dosadašnje iskustvo doživjela sam na
                      završnim radovima na najatraktivnijem multifunkcionalnom
                      kompleksu „Capital Plaza“, gdje sam se susrela sa
                      savremenim materijalima i najsavršenijim tehničkim
                      rješenjima, što je za mene bio izazov. Svoje vještine
                      iskazala sam projektovanjem stambenih, poslovnih,
                      rezidencialnih i sportskih objekata, projektima
                      legalizacije i adaptacije, projektima enterijera stambenih
                      i poslovih objekata. Od ručnih skica do izvedenih
                      objekata, do danas sam prošla većinu faza. Arhitektura je
                      moja strast i stil života. Neiscrpnu inspiraciju
                      pronalazim u prirodi, koju moja arhitektura osluškuje.
                      Vjerujem da je sve energija, zato se trudim da kroz svoje
                      projekte postignem harmoniju i ravnotežu izmedju modernog,
                      tradicionalnog i duhovnog pri čemu najveću pažnju dajem
                      kruženju energije u prostoru. Pri tom postizanju
                      uravnoteženosti u prostoru nerijetko koristim svoja Feng
                      Shui znanja. Smatram da za svakoga postoji odgovarajuci
                      kutak, bilo da se radi o spoljnom ili unutrašnjem
                      prostoru. Prava čarolija počinje kada se udje u
                      unutrašnjost prostora koje nam energetski prija, i u kojem
                      imamo osjecaj mira i sklada. Uvijek se trudim da svojim
                      klijentima izadjem u susret, da imam sluha za njihove
                      zelje, potrebe i ideje jer smatram da je dizajn prostora
                      uvodjenje umjetnosti u svakodnevnicu kao i da je svako od
                      nas dizajner svog života, umjetnik u svom mikrosvijetu.
                      Stvarajuci dobar dizajn spajanjem estetike i
                      funkcionalnosti, trudim se da kroz svoje projekte pružim
                      emociju. Pored arhitekture, u slobodno vrijeme bavim se i
                      slikarstvom. Raduje me sto kroz svoje radove, svoj
                      umjetnicki dar mogu da udahnem u živote drugih.
                    </p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
              <Modal
                style={{ background: "rgba(30, 30, 30, 0.3)" }}
                dimmer={"blurring"}
                trigger={
                  <Button
                    style={{
                      backgroundColor: "#181818",
                      color: "white"
                    }}
                  >
                    Usluge
                  </Button>
                }
              >
                <Modal.Header>Usluge</Modal.Header>
                <Modal.Content
                  style={{ backgroundColor: "rgba(30, 30, 30, 0.3)" }}
                >
                  <Modal.Description>
                    <div style={{ padding: "5%", color: "white" }}>
                      <p>
                        Projekat enterijera vašeg prostora predstavlja tehnički
                        elaborat sa grafičkim prilozima i 2D i 3D prikazima svih
                        potrebnih osnova, 3d prikaza, presjeka, detalja i
                        elemenata koji su obuhvaćeni planiranim zahvatima.
                        Projektom enterijera mogu biti obuhvaćeni cijeli
                        objekti, a mogu biti obrađene samo određene prostorije
                        ili djelovi prostora, komadi enterijerske opreme i
                        namještaja koje želite da naglasite, popravite,
                        osvježite ili funkcionalno doradite. Osnovni smisao da
                        se stvori prostor ili objekat u kome će se korisnici
                        osećati prijatno i zadovoljno.
                      </p>
                      <br />
                      <p>
                        Mogu Vam pomoći sa izradom:
                        <ul>
                          <li>Idejnih rešenja</li>
                          <li>Idejnih projekata</li>
                          <li>
                            Glavnih projekata (za potrebe dobijanja građevinske
                            dozvole)
                          </li>
                          <li>
                            Projekata za izvođenje (za potrebe dobijanja
                            upotrebne dozvole)
                          </li>
                          <li>
                            Projekata izvedenog objekta (legalizacija obejekta)
                          </li>
                          <li>Projekata enterijera (glavni, idejni)</li>
                          <li>Kordinacija prilikom izrade projekata</li>
                        </ul>
                        Svi projekti se u potpunosti izrađuju po važećim
                        propisima i zakonima i svi su pokriveni validnom
                        licencom.
                      </p>
                      <br />
                      Aktivnosti prilikom ugovaranja obuhvataju nekoliko faza:
                      <ol>
                        <li>Definisanje projektnog zafatka</li>
                        <li>Izdrada konceptualnog rešenja u varijantama</li>
                        <li>Odabir varijante za dalju razradu</li>
                        <li>
                          Prezentovanje razrađene varijante - Idejno rešenje
                        </li>
                        <li>
                          Korekcija i izrada detaljne tehnicke dokumentacije na
                          nivou glavnog (Idejnog) projekta
                        </li>
                      </ol>
                      <p />
                      <Divider />
                      <Document file={{ file1 }} />
                      <Divider />
                      <Document file="..src/pdf/licencaproj.pdf" />
                    </div>
                  </Modal.Description>
                </Modal.Content>
              </Modal>

              <Dropdown
                style={{ color: "white" }}
                text="Portfolio"
                simple
                item
                as={Link}
                to="/portfolio"
              >
                <Dropdown.Menu>
                  <Dropdown
                    // item
                    style={dropStyle}
                    name="Oaza"
                    active={activeItem === "Oaza"}
                    text="Poslovno-apartmanski objekat “Oaza”"
                    as={Link}
                    to="/oaza"
                    onClick={this.handleItemClick}
                    icon={null}
                    fluid
                  />

                  <Dropdown
                    // item
                    style={dropStyle}
                    text="Ambasada UAE u Capital Plaza Centru (Podgorica)"
                    as={Link}
                    to="/ambasada"
                    onClick={this.handleItemClick}
                    icon={null}
                    fluid
                  />
                  <Dropdown
                    style={dropStyle}
                    text="Atlas banka u Capital Plaza Centru (Podgorica)"
                    as={Link}
                    to="/atlas"
                    onClick={this.handleItemClick}
                    icon={null}
                    fluid
                  />
                  <Dropdown
                    style={dropStyle}
                    text="Stambeno-poslovni objekat “Bogdanov kraj” (Cetinje)"
                    as={Link}
                    to="/bogdanov"
                    onClick={this.handleItemClick}
                    icon={null}
                    fluid
                  />
                  <Dropdown
                    style={dropStyle}
                    text="“Benex fitnes centar” u Capital Plaza Centru (Podgorica)"
                    as={Link}
                    to="/benexfitnes"
                    onClick={this.handleItemClick}
                    icon={null}
                    fluid
                  />
                  <Dropdown
                    style={dropStyle}
                    text="Stambeni objekat Cetinje"
                    as={Link}
                    to="/stambenicetinje"
                    onClick={this.handleItemClick}
                    icon={null}
                    fluid
                  />
                  <Dropdown
                    style={dropStyle}
                    text="Enterijer vile na primorju"
                    as={Link}
                    to="/vila"
                    onClick={this.handleItemClick}
                    icon={null}
                    fluid
                  />
                  <Dropdown
                    style={dropStyle}
                    renderLabel
                    text="Enterijer planinskog stana"
                    as={Link}
                    to="/planinski"
                    onClick={this.handleItemClick}
                    icon={null}
                    fluid
                  />
                </Dropdown.Menu>
              </Dropdown>
              <Modal
                style={{ background: "rgba(30, 30, 30, 0.5)" }}
                dimmer="blurring"
                trigger={
                  <Button
                    style={{
                      backgroundColor: "#181818",
                      color: "white"
                    }}
                  >
                    Kontakt
                  </Button>
                }
              >
                <Modal.Header>Kontakt</Modal.Header>
                <Modal.Content
                  style={{ backgroundColor: "rgba(30, 30, 30, 0.5)" }}
                >
                  <Modal.Description>
                    <div style={{ color: "white" }}>
                      <h5>+382 67 254 844</h5>
                      <a
                        class="email"
                        title="My email"
                        href="mailto:arhmiskovic@gmail.com"
                      >
                        arhmiskovic@gmail.com
                      </a>
                      <br />
                      <Button
                        style={{
                          marginTop: "3%",
                          backgroundColor: "white",
                          color: "#181818"
                        }}
                        content="Instagram"
                        icon="instagram"
                        href="https://www.instagram.com/ena_jel/"
                        target="_blank"
                      />
                      <Button
                        style={{
                          backgroundColor: "white",
                          color: "#181818"
                        }}
                        content="Facebook"
                        icon="facebook official"
                        href="https://www.facebook.com/jelena.miskovic.50"
                        target="_blank"
                      />
                    </div>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </div>
          </Menu>
        </Responsive>
        <Responsive maxWidth={768}>
          <Dropdown
            icon="bars"
            className="icon"
            pointing="left"
            button
            closeOnChange
            iconStyle={{
              justifyContent: "center",
              alignItems: "center"
            }}
            style={{
              backgroundColor: "#181818",
              color: "white",
              width: "50px",
              height: "50px",
              margin: "5%"
            }}

            // onMouseEnter={this.mouseEnter}
            // onMouseLeave={this.mouseLeave}
          >
            <Dropdown.Menu style={{ backgroundColor: "#181818" }}>
              <Dropdown.Item
                style={{ color: "white" }}
                text="MIŠKOVIĆ JELENA"
                as={Link}
                to="/"
                onClick={this.handleItemClick}
              />
              <Dropdown.Item>
                <Modal
                  style={{ background: "rgba(30, 30, 30, 0.3)" }}
                  closeIcon
                  dimmer={"blurring"}
                  trigger={
                    <a style={{ backgroundColor: "#181818", color: "white" }}>
                      O meni
                    </a>
                  }
                >
                  <Modal.Header>O meni</Modal.Header>
                  <Modal.Content
                    style={{ backgroundColor: "rgba(30, 30, 30, 0.3)" }}
                  >
                    {/* <Image
                      circular
                      src={s1}
                      style={{
                        margin: "auto",
                        width: "15%",
                        paddingBottom: "0px"
                      }}
                    /> */}
                    <Modal.Description>
                      <p
                        style={{
                          textAlign: "justify",
                          padding: "3%",
                          color: "white"
                        }}
                      >
                        Rodjena sam 1986. godine. Diplomirala sam na
                        Arhitektonskom fakultetu u Podgorici. Od 2010-te godine
                        se aktivno bavim tom profesijom. Prvobitno iskustvo sam
                        stekla kao dizajner enterijera u fabrici Mi- Rai. Potom
                        se, 2012-te godine, priključujem birou „ Atlas Invest“-a
                        kao projektant- saradnik na kapitalnim projektima Atlas
                        Grupe. U medjuvremenu, tim se razvio u kompaniju pod
                        nazivom „ID Construction“, uz koji sam stekla iskustvo i
                        sposobonst za vodjenje projekata. I dalje sam dio tog
                        tima. Najveće dosadašnje iskustvo doživjela sam na
                        završnim radovima na najatraktivnijem multifunkcionalnom
                        kompleksu „Capital Plaza“, gdje sam se susrela sa
                        savremenim materijalima i najsavršenijim tehničkim
                        rješenjima, što je za mene bio izazov. Svoje vještine
                        iskazala sam projektovanjem stambenih, poslovnih,
                        rezidencialnih i sportskih objekata, projektima
                        legalizacije i adaptacije, projektima enterijera
                        stambenih i poslovih objekata. Od ručnih skica do
                        izvedenih objekata, do danas sam prošla većinu faza.
                        Arhitektura je moja strast i stil života. Neiscrpnu
                        inspiraciju pronalazim u prirodi, koju moja arhitektura
                        osluškuje. Vjerujem da je sve energija, zato se trudim
                        da kroz svoje projekte postignem harmoniju i ravnotežu
                        izmedju modernog, tradicionalnog i duhovnog pri čemu
                        najveću pažnju dajem kruženju energije u prostoru. Pri
                        tom postizanju uravnoteženosti u prostoru nerijetko
                        koristim svoja Feng Shui znanja. Smatram da za svakoga
                        postoji odgovarajuci kutak, bilo da se radi o spoljnom
                        ili unutrašnjem prostoru. Prava čarolija počinje kada se
                        udje u unutrašnjost prostora koje nam energetski prija,
                        i u kojem imamo osjecaj mira i sklada. Uvijek se trudim
                        da svojim klijentima izadjem u susret, da imam sluha za
                        njihove zelje, potrebe i ideje jer smatram da je dizajn
                        prostora uvodjenje umjetnosti u svakodnevnicu kao i da
                        je svako od nas dizajner svog života, umjetnik u svom
                        mikrosvijetu. Stvarajuci dobar dizajn spajanjem estetike
                        i funkcionalnosti, trudim se da kroz svoje projekte
                        pružim emociju. Pored arhitekture, u slobodno vrijeme
                        bavim se i slikarstvom. Raduje me sto kroz svoje radove,
                        svoj umjetnicki dar mogu da udahnem u živote drugih.
                      </p>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              </Dropdown.Item>
              <Dropdown.Item>
                <Modal
                  style={{ background: "rgba(30, 30, 30, 0.3)" }}
                  closeIcon
                  dimmer={"blurring"}
                  trigger={
                    <a
                      style={{
                        backgroundColor: "#181818",
                        color: "white"
                      }}
                    >
                      Usluge
                    </a>
                  }
                >
                  <Modal.Header>Usluge</Modal.Header>
                  <Modal.Content
                    style={{ backgroundColor: "rgba(30, 30, 30, 0.3)" }}
                  >
                    <Modal.Description>
                      <div style={{ padding: "5%", color: "white" }}>
                        <p>
                          Projekat enterijera vašeg prostora predstavlja
                          tehnički elaborat sa grafičkim prilozima i 2D i 3D
                          prikazima svih potrebnih osnova, 3d prikaza, presjeka,
                          detalja i elemenata koji su obuhvaćeni planiranim
                          zahvatima. Projektom enterijera mogu biti obuhvaćeni
                          cijeli objekti, a mogu biti obrađene samo određene
                          prostorije ili djelovi prostora, komadi enterijerske
                          opreme i namještaja koje želite da naglasite,
                          popravite, osvježite ili funkcionalno doradite.
                          Osnovni smisao da se stvori prostor ili objekat u kome
                          će se korisnici osećati prijatno i zadovoljno.
                        </p>
                        <br />
                        <p>
                          Mogu Vam pomoći sa izradom:
                          <ul>
                            <li>Idejnih rešenja</li>
                            <li>Idejnih projekata</li>
                            <li>
                              Glavnih projekata (za potrebe dobijanja
                              građevinske dozvole)
                            </li>
                            <li>
                              Projekata za izvođenje (za potrebe dobijanja
                              upotrebne dozvole)
                            </li>
                            <li>
                              Projekata izvedenog objekta (legalizacija
                              obejekta)
                            </li>
                            <li>Projekata enterijera (glavni, idejni)</li>
                            <li>Kordinacija prilikom izrade projekata</li>
                          </ul>
                          Svi projekti se u potpunosti izrađuju po važećim
                          propisima i zakonima i svi su pokriveni validnom
                          licencom.
                        </p>
                        <br />
                        Aktivnosti prilikom ugovaranja obuhvataju nekoliko faza:
                        <ol>
                          <li>Definisanje projektnog zafatka</li>
                          <li>Izdrada konceptualnog rešenja u varijantama</li>
                          <li>Odabir varijante za dalju razradu</li>
                          <li>
                            Prezentovanje razrađene varijante - Idejno rešenje
                          </li>
                          <li>
                            Korekcija i izrada detaljne tehnicke dokumentacije
                            na nivou glavnog (Idejnog) projekta
                          </li>
                        </ol>
                        <p />
                        <Divider />
                        <Document file={{ file1 }} />
                        <Divider />
                        <Document file="..src/pdf/licencaproj.pdf" />
                      </div>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              </Dropdown.Item>
              <Dropdown.Item>
                <Dropdown
                  style={{ color: "white" }}
                  text="Portfolio"
                  simple
                  item
                  as={Link}
                  to="/portfolio"
                >
                  <Dropdown.Menu>
                    <Dropdown
                      style={dropStyle}
                      name="Oaza"
                      active={activeItem === "Oaza"}
                      text="Poslovno-apartmanski objekat “Oaza”"
                      as={Link}
                      to="/oaza"
                      onClick={this.handleItemClick}
                      icon={null}
                      fluid
                    />

                    <Dropdown
                      style={dropStyle}
                      text="Ambasada UAE u Capital Plaza Centru (Podgorica)"
                      as={Link}
                      to="/ambasada"
                      onClick={this.handleItemClick}
                      icon={null}
                      fluid
                    />
                    <Dropdown
                      style={dropStyle}
                      text="Atlas banka u Capital Plaza Centru (Podgorica)"
                      as={Link}
                      to="/atlas"
                      onClick={this.handleItemClick}
                      icon={null}
                      fluid
                    />
                    <Dropdown
                      style={dropStyle}
                      text="Stambeno-poslovni objekat “Bogdanov kraj” (Cetinje)"
                      as={Link}
                      to="/bogdanov"
                      onClick={this.handleItemClick}
                      icon={null}
                      fluid
                    />
                    <Dropdown
                      style={dropStyle}
                      text="“Benex fitnes centar” u Capital Plaza Centru (Podgorica)"
                      as={Link}
                      to="/benexfitnes"
                      onClick={this.handleItemClick}
                      icon={null}
                      fluid
                    />
                    <Dropdown
                      style={dropStyle}
                      text="Stambeni objekat Cetinje"
                      as={Link}
                      to="/stambenicetinje"
                      onClick={this.handleItemClick}
                      icon={null}
                      fluid
                    />
                    <Dropdown
                      style={dropStyle}
                      text="Enterijer vile na primorju"
                      as={Link}
                      to="/vila"
                      onClick={this.handleItemClick}
                      icon={null}
                      fluid
                    />
                    <Dropdown
                      style={dropStyle}
                      renderLabel
                      text="Enterijer planinskog stana"
                      as={Link}
                      to="/planinski"
                      onClick={this.handleItemClick}
                      icon={null}
                      fluid
                    />
                  </Dropdown.Menu>
                </Dropdown>
              </Dropdown.Item>
              <Dropdown.Item>
                <Modal
                  style={{ background: "rgba(30, 30, 30, 0.5)" }}
                  closeIcon
                  dimmer="blurring"
                  trigger={
                    <a
                      style={{
                        backgroundColor: "#181818",
                        color: "white"
                      }}
                    >
                      Kontakt
                    </a>
                  }
                >
                  <Modal.Header>Kontakt</Modal.Header>
                  <Modal.Content
                    style={{ backgroundColor: "rgba(30, 30, 30, 0.5)" }}
                  >
                    <Modal.Description>
                      <div style={{ color: "white" }}>
                        <h5>+382 67 254 844</h5>
                        <a
                          class="email"
                          title="My email"
                          href="mailto:arhmiskovic@gmail.com"
                        >
                          arhmiskovic@gmail.com
                        </a>
                        <br />
                        <Button
                          style={{
                            marginTop: "3%",
                            backgroundColor: "white",
                            color: "#181818"
                          }}
                          content="Instagram"
                          icon="instagram"
                          href="https://www.instagram.com/ena_jel/"
                          target="_blank"
                        />
                        <Button
                          style={{
                            backgroundColor: "white",
                            color: "#181818"
                          }}
                          content="Facebook"
                          icon="facebook official"
                          href="https://www.facebook.com/jelena.miskovic.50"
                          target="_blank"
                        />
                      </div>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Responsive>
      </div>
    );
  }
}
